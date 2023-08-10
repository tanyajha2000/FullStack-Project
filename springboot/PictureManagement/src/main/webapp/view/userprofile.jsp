<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html lang="en">
<head>
<title>home</title>
<meta charset="ISO-8859-1">
<%@include file="./common.jsp"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
</head>
<body>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<a class="navbar-brand" href="#">PhotoFrame</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse"
			data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
			aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNavDropdown">
			<ul class="navbar-nav">
				<li class="nav-item "><a class="nav-link" href="/home">Home
						Page</a></li>
				<li class="nav-item"><a class="nav-link"
					href="">Post images</a></li>
				<li class="nav-item"><a class="nav-link" href="/logout">Logout</a>
				</li>
			</ul>
		</div>
	</nav>

	<div class="container">
		<div>
			<h1>Hi ${user.username }</h1>
			<div align="right">
				<a href="/user/update/${user.userId}" class="btn btn-primary">Update
					Details</a>
				<a href="/user/delete/${user.userId}"class="btn btn-danger">Delete</a>
			</div>
			<h2>First Name: ${user.firstName}</h2>
			<h2>Last Name: ${user.lastName}</h2>
			<h2>Email: ${user.email }</h2>
			<h2>Username: ${user.username}</h2>
		</div>

	</div>

</body>
</html>