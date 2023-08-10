<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@include file="./common.jsp"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="ISO-8859-1">
<title>User Management</title>
</head>
<body>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">PhotoFrame</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item ">
        <a class="nav-link" href="">View Images </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/users">View Users</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/logout">Logout</a>
      </li>
    </ul>
  </div>
</nav>

	<h1>User Management</h1>
	<table class="table table-striped table-dark">
	<caption> User Details </caption>
		<thead>
			<tr>
				<th scope="col">User ID</th>
				<th scope="col">First Name</th>
				<th scope="col">Last Name</th>
				<th scope="col">Username</th>
				<th scope="col">Email</th>
				<th scope="col">Action</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach items="${list}" var="b">
				<tr>
					<th scope="row">${b.userId}</th>
					<td>${b.firstName}</td>
					<td>${b.lastName}</td>
					<td>${b.username}</td>
					<td>${b.email}</td>
					<td><a href="/user/delete/${b.userId}"class="btn btn-danger">Delete</a>
				</tr>
			</c:forEach>
		</tbody>
	</table>

</body>
</html>