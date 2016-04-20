'use strict';

$(function() {
	 $('#getAge').click(calcAge);
	 $('#getGrav').click(getAvatar);
	 $('#analyzer').click(analyzeIt);
	 $('#add').click(doAdd);
	 $('#subtract').click(doSubtract);
	 $('#multiply').click(doMultiply);
	 
})

function doAdd() {
	var num1 = $('.math1').val().toString();
	var num2 = $('.math2').val().toString();
	$('#math1').val("");
	$('#math2').val("");

	console.log("num1:", num1);
	$.get(`/math/sum/${num1}/${num2}`)  
	         //ajax req
	.done(function(data) {
		$('#maths').append(data) //append to DOM
	})
	.fail(function(error) {
		console.log('error:', error);
	});
}

function doSubtract() {
	var num1 = $('.math1').val();
	var num2 = $('.math2').val();
	$('#math1').val("");
	$('#math2').val("");

	$.get(`/math/subtract/$${num1}/${num2}`)  
	         //ajax req
	.done(function(data) {
		$('#maths').append(data) //append to DOM
	})
	.fail(function(error) {
		console.log('error:', error);
	});
}

function doMultiply() {
	var num1 = $('.math1').val();
	var num2 = $('.math2').val();
	$('#math1').val("");
	$('#math2').val("");

	$.get(`/math/multiply/${num1}/${num2}`)  
	         //ajax req
	.done(function(data) {
		$('#maths').append(data) //append to DOM
	})
	.fail(function(error) {
		console.log('error:', error);
	});
}

function calcAge() {
	var age = $('#ageIn').val();  //input from DOM
	$('#ageIn').val("");

	$.get(`/age/${age}`)  
	          //ajax req
		.done(function(data) {
			$('#yourAge').append('You are currently ' + data + 'ish').addClass('ageIsh'); //append to DOM
		})
		.fail(function(error) {
			console.log('error:', error);
		});
}


function getAvatar() {
	var email = $('#email').val();
	$('#email').val("");

	$.get(`/gravatar/${email}`)
		.done(function(data) {
			var $img = $('<img>').attr("src", data).addClass('image');
			$('#gravImg').append($img);

		 
		})
		.fail(function(error) {
			console.log('error:', error);
		});
}

function analyzeIt() {
	var text = $('#sentence').val();
	$('#sentence').val("");

	$.get(`/sentence/${text}`)
		.done(function(data) {
		$('#analyzed').append(data);
		})
		.fail(function(error) {
			console.log('error:', error);
		});		

}





