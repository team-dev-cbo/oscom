<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsf/html" prefix="h" %>
<%@ taglib uri="http://java.sun.com/jsf/core" prefix="f" %>

<!DOCTYPE html>
<f:view locale="#{testFilArianeManagedBean.locale}">
<html>
    
    <head>        
        <title>Test SSO</title>
        
    </head>
    <body>
        <div>
            <p>Utilisateur : <%= request.getRemoteUser() %></p>
            Si la ligne pr�c�dente indique null ou est vide apr�s ":", cette page n'est pas pass�e par le filtre SSO.
        </div>

    </body>
</html>
</f:view>