<form method="post" id="example"> 
	<div class="line">
		<label>First Name:</label>
		<input type="text" size="12" maxlength="12" name="Fname"><br /> 
		<label>Last Name:<label>
		<input type="text" size="12" maxlength="36" name="Lname"><br /> 
	</div>

	<div class="line">
		<label>Gender:</label>
		Male:<input type="radio" value="Male" name="gender"><br />
		Female:<input type="radio" value="Female" name="gender"><br />
	</div>

	<div class="line">
		<label>Age group:</label>
		0 - 30:<input type="radio" value="1" name="age"><br />
		30 - 60:<input type="radio" value="2" name="age"><br />
		60 - over:<input type="radio" value="3" name="age"><br />
	</div>

	<div class="line">
		<label>Please choose type of residence:</label>
		Steak:<input type="checkbox" value="Steak" name="food"><br />
		Pizza:<input type="checkbox" value="Pizza" name="food"><br />
		Chicken:<input type="checkbox" value="Chicken" name="food"><br />
	</div>

	<div class="line">
		<label>Please choose type of vegi:</label>
		Broccoli:<input type="checkbox" value="Broccoli" name="vegi"><br />
		Potato:<input type="checkbox" value="Potato" name="vegi"><br />
		Tomato:<input type="checkbox" value="Tomato" name="vegi"><br />
	</div>

	<div class="line">	
		<label>Your favourite quote!</label>
		<textarea name="quote" placeholder="Enter it here ..."></textarea>
	</div>

	<div class="line">
		<label>Select a Level of Education:</label>
		<select name="education">
			<option value="Jr.High">Jr.High</option>
			<option value="HighSchool">HighSchool</option>
			<option value="College">College</option>
		</select>
	</div>

	<div class="line">
		<label>Select your favorite time of day:</label>
		<select name="TofD" size="3">
			<option value="Morning">Morning</option>
			<option value="Day">Day</option>
			<option value="Night">Night</option>
		</select>
	</div>
	
	<div class="line">
		<input type="button" value="Click me" id="button" onclick="serializeForm('#example')">
	</div>
</form>