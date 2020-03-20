$('.top-line').after('<div class="mobile-menu d-xl-none">');
	$('.top-menu').clone().appendTo('.mobile-menu');
	$('.mobile-menu-btn').click(function(){
		$('.mobile-menu').stop().slideToggle();
	});

  $('#myCarousel').carousel({
   interval: 3000,
})

function prixU()
{
  var beri = document.getElementById("article").value;
  if (beri  == 1)
	 {
		 prixU1 = 5000;
    document.getElementById("prix").value = prixU1;
    qtite = document.getElementById("nbre").value;
    montant = qtite*prixU1;
    document.getElementById("total").value = montant;

  }
  else if (beri == 2)
	{
		prixU2 = 10000;
    document.getElementById("prix").value = prixU2;
    qtite = document.getElementById("nbre").value;
    montant = qtite*prixU2;
    document.getElementById("total").value = montant;

  }
  else if (beri == 3)
	{
		prixU3 = 8000;
    document.getElementById("prix").value = prixU3;
    qtite = document.getElementById("nbre").value;
    montant = qtite*prixU3;
    document.getElementById("total").value = montant;


  }
  else if (beri  == 4)
	{
		prixU4 = 12000;
    document.getElementById("prix").value = prixU4;
    qtite = document.getElementById("nbre").value;
    montant = qtite*prixU4;
    document.getElementById("total").value = montant;

  }
  else if (beri  == 5)
	{
		prixU5 = 15000;
    document.getElementById("prix").value = prixU5;
    qtite = document.getElementById("nbre").value;
    montant = qtite*prixU5;
    document.getElementById("total").valu = montant;

  }
  else if (beri  == 6)
	{
		prixU6 = 18000;
    document.getElementById("prix").value = prixU6;
    qtite = document.getElementById("nbre").value;
    montant = qtite*prixU6;
    document.getElementById("total").value = montant;

  }
}
