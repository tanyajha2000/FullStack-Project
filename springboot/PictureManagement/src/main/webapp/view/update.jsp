<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="ISO-8859-1">
<%@include file="./common.jsp"%>
<title>Update Book Details</title>
</head>
<body>
	<div class="col-md-6 offset-md-3">
				<h1 class="text-center mb-3">Update User Details</h1>
	<form action="${pageContext.request.contextPath}/updating" method="post">

		<label for="userId">User ID:</label> <br> <input type="text" class="form-control"
			id="userId" name="userId" value="${user.userId}"> 
			  <small class="text-danger">User
							Id can't be changed</small>
			<br> <label
			for="firstName">First Name:</label> <br> <input type="text" class="form-control"
			id="firstName" name="firstName" value="${user.firstName }"> <br>
		<label for="lastName">Last Name:</label> <br> <input type="text" class="form-control"
			id="lastName" name="lastName" value="${user.lastName }"> <br>
		<label for="username">Username:</label> <br> <input type="text" class="form-control"
			id="username" name="username" value="${user.username }"> <br>
		<label for="username">Email:</label> <br> <input type="text" class="form-control"
			id="email" name="email" value="${user.email }">
			  <small class="text-danger">User
							Email can't be changed</small> <br> <label
			for="password">Password:</label> <br> <input type="text" class="form-control"
			id="password" name="password" value="${user.password }"> <br>
		<br> <br>
		<button type="submit" value="Submit">Update</button>
	</form>
	</div>
</body>
</html>