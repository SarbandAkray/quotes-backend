let count;
$(document).ready(()=>{
  
  $.getJSON("/get/downalodsForWindows",(res)=>{
    count = res[0].amount;
    document.getElementById("downloadsForWindows").innerHTML= count+" Downloads";
  });
  $.getJSON("/get/downalodsForAndroid",(res)=>{
    count = res[0].amount;
    document.getElementById("downloadsForAndroid").innerHTML= count+" Downloads";
  });
 
});


$(".buttonOfDownloadWindows").click(function() {
  $.post('/download/desktop', (response)=>{});

    var download = document.getElementById("download");
    download.click();
    $(".btn-circle-download").addClass("load");
    setTimeout(function() {
      $(".btn-circle-download").addClass("done");
    }, 1000);
    setTimeout(function() {
      $(".btn-circle-download").removeClass("load done");
    }, 5000);
  location.reload();
    
});

$(".buttonOfDownloadAndroid").click(function() {
  // $.post('/download/android', (response)=>{});

  //   var download = document.getElementById("download");
  //   download.click();
  //   $(".btn-circle-download").addClass("load");
  //   setTimeout(function() {
  //     $(".btn-circle-download").addClass("done");
  //   }, 1000);
  //   setTimeout(function() {
  //     $(".btn-circle-download").removeClass("load done");
  //   }, 5000);
  // location.reload();
    
});
  