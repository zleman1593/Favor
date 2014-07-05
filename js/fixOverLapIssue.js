
var favorRequest = '<section id="section-contact" class="section appear clearfix"><div class="container"><div class="row mar-bot40"><div class="col-md-offset-3 col-md-6"><div class="section-header"><h2 class="section-heading animated" data-animation="bounceInUp">Ask A favor!</h2></div></div></div><div class="row"><div class="col-md-8 col-md-offset-2"><div class="cform" id="contact-form"><div id="sendmessage"> Your Favor has been Asked. Thank you!</div><form role="form" class="contactForm"><div class="form-group"><label for="name">Your Name</label><input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="maxlen:4" data-msg="Please enter at least 4 chars"/><div class="validation"></div></div><div class="form-group"><label for="subject">Short title of Favor</label><input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="maxlen:4" data-msg="Please enter at least 8 chars of subject"/><div class="validation"></div></div><div class="form-group"><label for="message">Description of Favor</label><textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us"></textarea><div class="validation"></div></div><p> Duration</p><select class="form-control"><option>Less than 10 Minutes</option><option>About a half hour</option><option>An hour or More</option></select><p> Skills</p><select class="form-control"><option>Strength</option><option>Fantastic Grammar</option><option>Quick car trip</option></select><p> Expense</p><select class="form-control"><option>No Expense</option><option>A few Dollars</option></select><p>Due Date </p><select class="form-control"><option>Today</option><option>Tomorrow</option><option>Within A week</option><option>Out a week or more from now</option></select><button class="btn btn-theme pull-left">Request Favor</button></form></div></div></div></div></section>';
$( document ).ready(function() {

      var fix = function () {
         $(favorRequest).insertBefore(".featured").hide().fadeIn(1000);}


$( "#favorButton" ).click(function(event) {
	event.preventDefault();
	$( "#favorButton" ).remove();
  fix();
});

});

