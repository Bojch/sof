<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<title>Sof Exmaple</title>

	<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
	<script type="text/javascript" src="js/sof.js"></script>

	<link rel="stylesheet" type="text/css" href="css/sof.css" />

	<script type="text/javascript">
		function serializeForm(id)
		{
			var data = $(id).sof().setFields('vegi').get('object');
			console.log(data);

			//var data = $(id).sof().get();
			//console.log(data);
		};
	</script>
</head>

<body>