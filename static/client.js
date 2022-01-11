
function summary () {  
  
    var t = $("#input-text").val()
    var p = $("#percentage").val()

    if (t.length == 0) {

      let result = `<div class="alert alert-danger" align="center">
                <h2>No Text!! Please enter text. </h2>
            </div>`
      $("#output").html(result)

      return
    }

    if (p === "") {

      let result = `<div class="alert alert-danger" align="center">
                <h2>Please enter the percentage to be reduced to. </h2>
            </div>`
      $("#output").html(result)

      return
    }

    p = parseInt (p)

    if (p > 100) {

      p = 100
    }

    document.getElementById('summary-btn').style.visibility='hidden';

    $("#output").html('<strong>Please wait! your text is getting summarized..</strong>')    

    axios.post('http://localhost:8080/', {

      text_data: t,
      percentage: p

    })
    .then (function (res) {

      if(res){

        document.getElementById('summary-btn').style.visibility='visible';

        if (res.data.summary.length == 0) {

            var result = `<div class="alert alert-danger" align="center">
                <h2>Please increase percentage to be reduced. </h2>
            </div>`
            $("#output").html(result)

        } else {

            var result = `<div id="output-result">
                <textarea class="form-control" rows="12" id="output-text">${res.data.summary}</textarea>
            </div>`
            $("#output").html(result)
        }
      }
      else{

        var result = `<div class="alert alert-danger" align="center">
                <h2>Error from server</h2>
            </div>`
            $("#output").html(result)
      }
    })
    .catch (function (error) {

      document.getElementById('summary-btn').style.visibility='visible';
      var result = `<div class="alert alert-danger" align="center">
                <h2>Error from server</h2>
            </div>`
            $("#output").html(result)
      console.log(error);     
    });          
  }

function sampletext () {

  document.getElementById("input-text").value = "The story of The Lion King takes place in an African kingdom called the Pride Lands, where a lion rules over the other animals as king. Rafiki, a mandrill shaman, anoints Simba, the newborn cub of King Mufasa and Queen Sarabi, and presents him to a gathering of animals at Pride Rock. Meanwhile, Mufasa's younger brother, Scar, who decided not to be at the ceremony, is annoyed that he is no longer the heir to the throne. Mufasa confronts Scar about not attending the ceremony and says to not turn his back on him when he tries to leave. When Scar says Mufasa should not turn his back on him and Mufasa asks him if it is a challenge, Scar replies that he would not dream of it as he lacks brute strength. After Scar leaves, Mufasa wonders what to do with him. A few years later, Mufasa shows a young Simba the Pride Lands and explains to him the responsibilities of kingship and the ‘circle of life’, which connects all living things. Meanwhile, Scar plots to eliminate Mufasa and Simba so he may become king. He tricks Simba and his best friend Nala into exploring a forbidden elephant graveyard, where the cubs are chased by three hyenas named Shenzi, Banzai, and Ed, who are in league with Scar. Mufasa is alerted of the incident by Zazu and rescues the cubs. Though disappointed in Simba, Mufasa eventually forgives him and explains that the great kings of the past watch over them from the night sky, from which he will one day watch over Simba. Later that night, Scar gains the loyalty of the hyenas by claiming that if he becomes king, they will ‘never go hungry again’ if they help him kill Mufasa and Simba. Plotting further, Scar gathers more hyenas forming an army. Sometime later, Scar lures Simba into a gorge for a ‘surprise from his father’ then signals the hyenas to create a wildebeest stampede down into the gorge where Simba is. Alerted by an insincerely dramatic Scar, Mufasa races to rescue Simba from the stampede. He saves his son but is left clinging to the edge of a cliff, which results in Scar flinging him into the stampede below to his death. Scar convinces Simba that he was responsible for his own father's death and recommends that he flees the Pride Lands, never to return. To compound this, Scar once again sends the hyenas to kill Simba, but as Simba reaches a thorny embankment, they let him escape, hurling threats that he will be killed if ever seen again. That night back at Pride Rock, Scar informs Sarabi, Nala, and the rest of the pride that both Mufasa and Simba were killed in the stampede and that he is assuming the throne as the closest of kin. After becoming king, Scar fulfills his promise to the hyenas and allows them to come into the Pride Lands. Simba collapses in a distant desert where he is found unconscious by Timon and Pumbaa, a meerkat-warthog duo who raise Simba under their carefree ‘Hakuna Matata’ lifestyle. When Simba has grown into a young adult, he saves them from a hungry lioness revealed to be Nala. Simba shows Nala around his home, and the two begin to fall in love. Nala then tells him that Scar's tyrannical reign has turned the Pride Lands into a barren wasteland; she demands that Simba return and take his rightful place as king, but Simba refuses, still guilty about supposedly causing his father's death. Rafiki arrives and persuades Simba to return to the Pride Lands, assisted by Mufasa's presence in the stars. After some advice from Rafiki and the ghost of his father, Simba, followed by Nala, Timon, and Pumbaa, returns home. Once back at Pride Rock, Simba (with Timon, Pumbaa, and Nala) is horrified to see the condition of the Pride Lands. What was once a lush paradise was now a dead wasteland. With the overhunting, the prey eventually left the Pride Lands, causing famine in the pride. After seeing Scar strike his mother, Simba announces his return. In response, Simba confronts Scar, who forces Simba to confess to being responsible for Mufasa's death. Scar then forces Simba over the edge of Pride Rock, just as a lightning bolt starts a fire below. As Simba dangles over the edge of Pride Rock, Scar whispers to Simba that he killed Mufasa. Enraged, Simba leaps up and pins Scar to the ground, forcing him to admit the truth to the pride. A raging battle ensues between the hyenas and the lionesses, Timon, and Pumbaa, which results in Simba cornering Scar. Amid their fight, Scar tries to surreptitiously blame everything on the hyenas, but the hyenas overhear his conversation with Simba and back away growling. Simba orders Scar to flee the Pride Lands. Scar pretends to leave but turns to attack Simba, resulting in a final duel. Simba eventually overpowers Scar by kicking and hurling him over a low cliff. Scar initially survives the fall but finds himself surrounded by the now resentful hyenas. The hyenas surround their traitorous fallen leader. Scar frantically tries to absolve himself, but the hyenas finally had enough of his lies, derogatory treatment, and violated promises, so they ignore his life plea, attack him, and maul him to death, as flames rise around and engulf them. With Scar and the hyenas gone, and with the rightful king in place, the Pride Lands are restored which is turning green with life again. The film concludes with Rafiki presenting Simba and Nala's newborn cub into the air, thus continuing the Circle of Life.";
  document.getElementById("percentage").value = 30;
}
