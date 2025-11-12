import { trace } from '@opentelemetry/api';
import { useEffect } from 'react';

const tracer = trace.getTracer('react-components');

export function useComponentTracer(componentName: string) {
  useEffect(() => {
    const span = tracer.startSpan(`${componentName}.lifecycle`);
    
    // Record the mount event
    span.addEvent('component.mounted');
    
    return () => {
      // Record the unmount event
      span.addEvent('component.unmounted');
      span.end();
    };
  }, [componentName]);
}