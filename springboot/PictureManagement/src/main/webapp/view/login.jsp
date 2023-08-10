<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
    "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<head>
<style>
.error {
	color: red;
	font-style: italic;
}
</style>
<%@include file="./common.jsp"%>
<title>Login</title>
</head>
<body>
	<h1 class="text-center">Log In</h1>
	<div class="container">
		<div class="row" mt=5>
			<div class="col-md-6.offset-md-3 ">
				<form:form action="loging" method="post" modelAttribute="login">
					<div class="mb-3">
						<form:label path="email" class="form-label">Email</form:label>
						<form:input path="email" type="email" class="form-control"
							name="email" id="email" aria-describedby="emailHelp"
							required="required" />
						</head>
					</div>
					<div class="mb-3">
						<form:label path="password" class="form-label">password</form:label>
						<form:input path="password" type="password" class="form-control"
							name="password" id="password" aria-describedby="emailHelp"
							required="required" />
						<form:errors path="password" cssClass="error" />
						<br>
						<button type="submit" class="btn btn-primary">Submit</button>
						<br> <br>
			</div>
			<div class="mb-3 form-check">
				<a href="/" class="btn btn-primary">Create New Account</a>
			</div>
			</form:form>
		</div>
	</div>
</body>
</html>