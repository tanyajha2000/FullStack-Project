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
<title>Adding Details</title>
</head>
<body>
	<h1 class="text-center">Sign Up</h1>
	<div class="container">
		<div class="row" mt=5>
			<div class="col-md-6.offset-md-3 ">
				<form:form action="/adding" method="post" modelAttribute="user">
					<div class="mb-3">
						<form:label path="firstName" class="form-label">First Name</form:label>
						<form:input path="firstName" type="text" class="form-control"
							name="firstName" id="firstName" aria-describedby="emailHelp"
							required="required" />
						<form:errors path="firstName" cssClass="error" />
					</div>
					<div class="mb-3">
						<form:label path="lastName" class="form-label">Last Name</form:label>
						<form:input path="lastName" type="text" class="form-control"
							name="lastName" id="lastName" aria-describedby="emailHelp" />
						<form:errors path="lastName" cssClass="error" />
					</div>
					<div class="mb-3">
						<form:label path="username" class="form-label">Username</form:label>
						<form:input path="username" type="text" class="form-control"
							name="username" id="username" aria-describedby="emailHelp"
							required="required" />
						<form:errors path="username" cssClass="error" />
					</div>
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
							name="password" id="password" aria-describedby="emailHelp" />
						<form:errors path="password" cssClass="error" required="required" />
					</div>
					<div class="mb-3 form-check">
						<input type="checkbox" class="form-check-input" id="exampleCheck1"
							required="required" /> <label class="form-check-label"
							for="exampleCheck1">Agree to terms and conditions</label>
					</div>
					<button type="submit" class="btn btn-primary">Submit</button>
				</form:form>
				<br>
				<div class="mb-3 form-check">
					<a href="login"  class="btn btn-primary">Existing User</a>
				</div>
			</div>
		</div>
	</div>
</body>
</html>