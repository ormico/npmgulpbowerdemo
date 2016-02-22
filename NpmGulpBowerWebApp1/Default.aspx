<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="NpmGulpBowerWebApp1.Default" %>
<!DOCTYPE html>
<html lang="en">
<head runat="server">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Hello, World!</title>
    <link href="<%=ResolveUrl("~/css/all.css")%>" rel="stylesheet" type="text/css" />
    <script src="<%=ResolveUrl("~/scripts/all.js")%>"></script>
</head>
<body>
    <h1>Hello, World!</h1>
    <form id="form1" runat="server">
    <div>
        <p class="alpha">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae quam dignissim, elementum ligula at, 
            rhoncus neque. Donec in quam laoreet, semper sem vitae, tempus nibh. Curabitur luctus luctus eros ut 
            posuere. Aliquam imperdiet lacinia enim, quis consectetur arcu gravida sit amet. Curabitur in lorem 
            luctus, luctus urna at, dictum ipsum. Duis condimentum pretium blandit. Proin tempor blandit erat eu 
            vulputate. Donec ut suscipit orci, ac aliquam eros. Suspendisse ornare ipsum a magna blandit suscipit. 
            Fusce lobortis nulla nibh. Curabitur eget maximus libero. Vestibulum vehicula sem vitae consequat lacinia. 
            Fusce ac ex a ligula malesuada rutrum nec non justo. Pellentesque habitant morbi tristique senectus et 
            netus et malesuada fames ac turpis egestas. Aenean ex risus, aliquet et ligula in, fermentum dapibus odio. 
            Aliquam porta, diam eu consequat mollis, metus tellus tempus eros, vel dapibus felis mauris in dui.
        </p>
        <p>
            Nullam vehicula lorem orci, eget porta lacus feugiat id. Curabitur eu libero dolor. Phasellus nec mattis odio, 
            vel suscipit nunc. Nunc lobortis dignissim diam id scelerisque. In gravida nisi nec sapien dictum, quis 
            fringilla ipsum dictum. Nullam gravida varius dolor et ultricies. Donec scelerisque volutpat scelerisque. 
            Nulla ultrices tempus tristique.
        </p>
    </div>
    </form>
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</body>
</html>
