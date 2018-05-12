$(document).ready(function(){
    var config = {
      apiKey: "AIzaSyBP_YPfs0SOB6NNbb2CoN0XsEsjBUQfmd8",
      authDomain: "surmako-89658.firebaseapp.com",
      databaseURL: "https://surmako-89658.firebaseio.com",
      projectId: "surmako-89658",
      storageBucket: "surmako-89658.appspot.com",
      messagingSenderId: "663870232857"
    };
    firebase.initializeApp(config);

    var rootRef = firebase.database().ref().child('headerLogo');
	rootRef.on("child_added", snap =>{
		var url = snap.child("url").val();
		var name_image = snap.child("name_image").val();

		$("#logoheader").attr("src", url);
		$("#uplogo").attr("href", url);
		$("#footLogo").attr("src", url);
	});

	var rootRef = firebase.database().ref().child('tbl_jargon');
	rootRef.on("child_added", snap =>{
		var url = snap.child("s_url").val();
		var jargon = snap.child("s_jargon").val();
		var keterangan_jargon = snap.child("s_keterangan_jargon").val();
		var name_image = snap.child("s_name_image").val();

		$("#jargon_data").prepend("<div class='carousel-item slider-fullscreen-image' data-bg-video-slide='false' style='background-image: url("+url+");'><div class='container container-slide'><div class='image_wrapper'><div class='mbr-overlay'></div><img src=''><div class='carousel-caption justify-content-center'><div class='col-10 align-right'><h2 class='mbr-fonts-style display-1'>"+jargon+"</h2><p class='lead mbr-text mbr-fonts-style display-5'>"+keterangan_jargon+"</p></div></div></div></div></div>");
	});

	/**var rootRef = firebase.database().ref().child('tbl_ourteam');
	rootRef.on("child_added", snap1 =>{
		
		var url = snap1.child("s_url").val();
		var name_image = snap1.child("s_name_image").val();
		var nama = snap1.child("s_nama").val();
		var jabatan = snap1.child("s_jabatan").val();

		//$("#team").append("<div class='carousel-item slider-fullscreen-image' style='height:200px;' data-bg-video-slide='false' style='background-image: url("+url+");'><div class='container container-slide'><div class='image_wrapper'><div class='mbr-overlay'></div><img src='"+url+"'><div class='carousel-caption justify-content-center'><div class=col-10 align-center'><p class='lead mbr-text mbr-fonts-style display-7' style='margin-top:150px; font-weight:bold;'>"+nama+" ("+jabatan+")</p></div></div></div></div></div>");
		//$("#teamData").append("<div class='carousel-item'><div class='media-container-row'><div class='col-md-12'><div class='wrap-img'><img src='assets/images/1.png' class='img-responsive clients-img' media-simple='true'></div></div></div></div>");
	});**/

	var rootRef_product = firebase.database().ref().child('tbl_product');
	rootRef_product.on("child_added", snap_product => {

		var product_name = snap_product.child("s_product_name").val();
		var url = snap_product.child("s_url").val();

		$("#product_data").append("<div class='responsive' style='margin-bottom:5px;'><div class='gallery'><a target='_blank' href='img_fjords.jpg'><img src='"+url+"' width='600' height='400'></a><div class='desc' style='background-color:#55B4D4;color:#ffffff;font-weight:bold;'>"+product_name+"</div></div></div>");
	});

	firebase.database().ref('tbl_ourteam').once('value').then(function(snapshot){
		var teamObject = snapshot.val();
		var keys = Object.keys(teamObject);
		var	currentRow;
		for (var i = 0; i < keys.length; i++){
			var currentObject = teamObject[keys[i]];
			var key = keys[i];
			if (i % 5 == 0) {
				currentRow = document.createElement("div");
				$(currentRow).addClass("carousel-item");
				$("#teamData").append(currentRow);
			}
			var	mcr = document.createElement("div");
			$(mcr).addClass("media-container-row");

			var cm12 = document.createElement("div");
			$(cm12).addClass("col-md-12");

			var wi = document.createElement("div");
			$(wi).addClass("wrap-img");

			var cnt = document.createElement("div");
			$(cnt).attr("align", "center");

			var p = document.createElement("p");
			$(p).html(currentObject.s_nama + " ("+currentObject.s_jabatan+")");

			var image = document.createElement("img");
			image.src = currentObject.s_url;
			$(image).addClass("img-responsive clients-img");

			$(mcr).append(cm12);
			$(cm12).append(wi);
			$(cm12).append(cnt);
			$(cnt).append(p);
			$(wi).append(image);
			$(currentRow).append(mcr);
		}
	});

    firebase.database().ref('tbl_paket').once('value').then(function(snapshot){
		var teamObject = snapshot.val();
		var keys = Object.keys(teamObject);
		var	currentRow;
		for (var i = 0; i < keys.length; i++){
			var currentObject = teamObject[keys[i]];
			var key = keys[i];
			if (i % 3 == 0) {
				currentRow = document.createElement("div");
				$(currentRow).addClass("media-container-row container pt-5 mt-2");
				$("#viewPaket").append(currentRow);
			}
			var	div1 = document.createElement("div");
			$(div1).addClass("col-12 col-md-6 mb-4 col-lg-4");

			var div2 = document.createElement("div");
			$(div2).addClass("card flip-card p-5 align-center");

			var div3 = document.createElement("div");
			$(div3).addClass("card-front card_cont");

			var image = document.createElement("img");
			image.src = currentObject.s_url;
			$(image).addClass("img-responsive clients-img");

			var div4 = document.createElement("div");
			$(div4).addClass("card_back card_cont");

			var h4 = document.createElement("h4");
			$(h4).html(currentObject.s_judul_paket);

			var p = document.createElement("p");
			$(p).html(currentObject.s_keterangan_paket);

		
			$(div1).append(div2);
			$(div2).append(div3);
			$(div3).append(image);
			$(div2).append(div4);
			$(div4).append(h4);
			$(div4).append(p);
			$(currentRow).append(div1);
		}
	});
	
	firebase.database().ref('tbl_client').once('value').then(function(snapshot){
		var teamObject = snapshot.val();
		var keys = Object.keys(teamObject);
		var	currentRow;
		for (var i = 0; i < keys.length; i++){
			var currentObject = teamObject[keys[i]];
			var key = keys[i];
			if (i % 5 == 0) {
				currentRow = document.createElement("div");
				$(currentRow).addClass("carousel-item");
				$("#clientData").append(currentRow);
			}
			var	mcr = document.createElement("div");
			$(mcr).addClass("media-container-row");

			var cm12 = document.createElement("div");
			$(cm12).addClass("col-md-12");

			var wi = document.createElement("div");
			$(wi).addClass("wrap-img");

			var cnt = document.createElement("div");
			$(cnt).attr("align", "center");

			var p = document.createElement("p");
			$(p).html(currentObject.s_nama_client);

			var image = document.createElement("img");
			image.src = currentObject.s_url;
			$(image).addClass("img-responsive clients-img");

			$(mcr).append(cm12);
			$(cm12).append(wi);
			$(cm12).append(cnt);
			$(cnt).append(p);
			$(wi).append(image);
			$(currentRow).append(mcr);
		};
	});

	viewClient();
	viewContact();
	viewVideo();
	viewPembatas();
	viewTeam();
	viewProduk();
	viewPaket();
});

function viewClient(){
	return firebase.database().ref('/tbl_setting/Client/').once('value').then(function(snapshot) {
	  var judul = snapshot.val().judul_client;
	  var keterangan = snapshot.val().keterangan_client;

	  $("h2#judul_client").html(judul);
	  $("h3#keterangan_client").html(keterangan);
	});
};

function viewContact(){
	return firebase.database().ref('/tbl_setting/Contact/').once('value').then(function(snapshot1) {
	  var judul1 = snapshot1.val().judul_contact;
	  var keterangan1 = snapshot1.val().keterangan_contact;

	  $("h2#judul_contact").html(judul1);
	  $("h3#keterangan_contact").html(keterangan1);
	});
};

function viewVideo(){
	return firebase.database().ref('/tbl_setting/Video/').once('value').then(function(snapshot1) {
	  var judul1 = snapshot1.val().judul_video;
	  var keterangan1 = snapshot1.val().keterangan_product;

	  $("h2#judul_video").html(judul1);
	  $("h4#keterangan_video").html(keterangan1);
	});
};

function viewPembatas(){
	return firebase.database().ref('/tbl_setting/Pembatas/').once('value').then(function(snapshot1) {
	  var judul1 = snapshot1.val().judul_header;
	  var keterangan1 = snapshot1.val().keterangan;

	  $("h2#judul_pembatas").html(judul1);
	  $("h3#keterangan_pembatas").html(keterangan1);
	});
};

function viewTeam(){
	return firebase.database().ref('/tbl_setting/Team/').once('value').then(function(snapshot1) {
	  var judul1 = snapshot1.val().judul_team;
	  var keterangan1 = snapshot1.val().keterangan_team;

	  $("h2#judul_team").html(judul1);
	  $("h3#keterangan_team").html(keterangan1);
	});
};

function viewProduk(){
	return firebase.database().ref('/tbl_setting/Produk/').once('value').then(function(snapshot1) {
	  var judul1 = snapshot1.val().judul_product;
	  var keterangan1 = snapshot1.val().keterangan_product;

	  $("h2#judul_produk").html(judul1);
	  $("h4#keterangan_produk").html(keterangan1);
	});
};

function viewPaket(){
	return firebase.database().ref('/tbl_setting/Paket/').once('value').then(function(snapshot1) {
	  var judul1 = snapshot1.val().judul_paket;
	  var keterangan1 = snapshot1.val().keterangan_paket;

	  $("h2#judul_paket1").html(judul1);
	  $("h3#keterangan_paket1").html(keterangan1);
	});
}