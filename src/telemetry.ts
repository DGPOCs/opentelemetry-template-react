import { getWebAutoInstrumentations } from "@opentelemetry/auto-instrumentations-web";
import { ZoneContextManager } from "@opentelemetry/context-zone";
import { WebTracerProvider } from "@opentelemetry/sdk-trace-web";
import {
  CompositePropagator,
  W3CBaggagePropagator,
  W3CTraceContextPropagator,
} from "@opentelemetry/core";
import { resourceFromAttributes } from "@opentelemetry/resources";
import { ATTR_SERVICE_NAME, ATTR_SERVICE_VERSION } from "@opentelemetry/semantic-conventions";
import { registerInstrumentations } from "@opentelemetry/instrumentation";
//exporters
import { BatchSpanProcessor } from "@opentelemetry/sdk-trace-base";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";

// The SemanticResourceAttributes is an enum that provides a set of predefined attribute keys for commonly used attributes in OpenTelemetry to maintain consistency across different OpenTelemetry implementations
const resourceSettings = resourceFromAttributes({
    [ATTR_SERVICE_NAME]: 'opentelemetry-template-react',
     [ATTR_SERVICE_VERSION]: "0.0.1",
  });

const traceExporter = new OTLPTraceExporter({
  url: `${import.meta.env.OTEL_COLLECTOR_URL}/v1/traces`,
});

const provider = new WebTracerProvider({ resource: resourceSettings, spanProcessors: [
  new BatchSpanProcessor(
    traceExporter,
    //Optional BatchSpanProcessor Configurations
  )
]});

// ZoneContextManager is a context manager implementation based on the Zone.js library. It enables context propagation within the application using zones.
provider.register({
  contextManager: new ZoneContextManager(),
  // Configure the propagator to enable context propagation between services using the W3C Trace Headers
  propagator: new CompositePropagator({
    propagators: [new W3CBaggagePropagator(), new W3CTraceContextPropagator()],
  }),
});

const startOtelInstrumentation = () => {
  console.info(`Registering Otel ${new Date().getMilliseconds()}`);
  // Registering instrumentations
  registerInstrumentations({
    tracerProvider: provider,
    instrumentations: [
      getWebAutoInstrumentations({       
        "@opentelemetry/instrumentation-document-load": {
          ignoreNetworkEvents: false,
          ignorePerformancePaintEvents: false,
          enabled: true,
        },
        "@opentelemetry/instrumentation-user-interaction": {
          enabled: true,
        },
        "@opentelemetry/instrumentation-xml-http-request": {
          propagateTraceHeaderCorsUrls: [ /.+/g], //backend url
          enabled: true,
        },
        "@opentelemetry/instrumentation-fetch": {
          propagateTraceHeaderCorsUrls: [ /.+/g], //backend url
          clearTimingResources: true,
          enabled: true,
        },
      }),
    ],
  });
};

/*
  const collectorOptions = {
    url: 'http://grafana-otel-lgtm.observability-project.orb.local:4319/v1/traces', // url is optional and can be omitted - default is http://localhost:4318/v1/traces
    headers: {}, // an optional object containing custom headers to be sent with each request
    concurrencyLimit: 10, // an optional limit on pending requests
  };
  const exporter = new OTLPTraceExporter(collectorOptions);

   const collectorJaegerOptions = {
    url: 'http://jaeger.observability-project.orb.local:14268/v1/traces', // url is optional and can be omitted - default is http://localhost:4318/v1/traces
    headers: {}, // an optional object containing custom headers to be sent with each request
    concurrencyLimit: 10, // an optional limit on pending requests
  };
*/

export { startOtelInstrumentation };
