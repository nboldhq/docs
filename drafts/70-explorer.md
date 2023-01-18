# API explorer

import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

export default () =>
<SwaggerUI
url="https://assets.nbold.io/api/nbold-api-openapi-latest.yaml"
layout="BaseLayout"
docExpansion="list"
defaultModelsExpandDepth={1}
defaultModelRendering="model"
displayOperationId={true}
showExtensions={true}
persistAuthorization={true}
oauth2RedirectUrl="https://docs.nbold.co/api/oauth2-redirect.html"
/>
