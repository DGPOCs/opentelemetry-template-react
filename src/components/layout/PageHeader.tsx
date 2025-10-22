import { APP_TITLE } from '../../config'

export function PageHeader() {
  return (
    <header className="page-header">
      <div className="page-header__badge">Observabilidad ready</div>
      <h1 className="page-header__title">{APP_TITLE}</h1>
      <p className="page-header__subtitle">
        Monitorea de un vistazo el pulso del ecosistema tecnológico: precios en vivo de las
        criptomonedas más relevantes y las noticias más recientes de DEV.to.
      </p>
    </header>
  )
}
