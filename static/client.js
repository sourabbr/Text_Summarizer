
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
