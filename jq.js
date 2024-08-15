$(document).ready(function() {
    $('#playb').click(function() {
        var video = $('video').get(0);
        video.play();
        $('#videocon').show();
        video.play();

        $('.playy').css('display', 'none'); 
        $('.watch').css('display', 'none'); 
    });
    $("nav a").on("click", function (event) {
        event.preventDefault(); 
    
        const target = $(this).attr("href"); //target section
        $("html, body").animate(
          {
            scrollTop: $(target).offset().top, //scrolling
          },
          800
        ); 
      });
      $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay: true,              
        autoplayTimeout: 3000,       
        autoplaySpeed: 1000,         
        animateOut: 'fadeOut',        
        animateIn: 'fadeIn',         
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    var currentlyPlaying = null; 

    function toggleAudio(audioElement) {
        if (currentlyPlaying && currentlyPlaying !== audioElement) {
            currentlyPlaying.pause(); 
            currentlyPlaying.currentTime = 0; 
        }

        if (audioElement.paused) {
            audioElement.play(); 
            currentlyPlaying = audioElement; 
        } else {
            audioElement.pause(); 
            currentlyPlaying = null; 
        }
    }

    $('#aifg').click(function() {
        var audio = $('#ifgg').get(0);
        toggleAudio(audio);
    });

    $('#akarera').click(function() {
        var audio = $('#ikarera').get(0);
        toggleAudio(audio);
    });

    $('#apantro').click(function() {
        var audio = $('#ipantropiko').get(0);
        toggleAudio(audio);
    });

    $('#alagi').click(function() {
        var audio = $('#ilagi').get(0);
        toggleAudio(audio);
    });

    $('#apf').click(function() {
        var audio = $('#icherry').get(0);
        toggleAudio(audio);
    });

    $('#atala').click(function() {
        var audio = $('#isalamin').get(0);
        toggleAudio(audio);
    });
   
});
