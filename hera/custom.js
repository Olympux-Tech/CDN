function copyToClipboard() {
    document.getElementById("invite-link").select();
    document.execCommand('copy');
}
var masterUrl =  $("#master_url").val();

function claimPC(data) {
    let id = data.getAttribute("data-face");
    $.ajax({
        url: masterUrl+"/points/claim-requests" + '/' + id + "",
        type: "GET",
        dataType: "JSON",
        success: function(data) {
            $('#points-value').text('Points: '+data.remainder);
        	alert("Claim request sent! sit back relax..");
        },
        error : function() {
            alert("Something's wrong :(");
        }
    });
}

function claimCC(data) {
    let id = data.getAttribute("data-face");
    $.ajax({
        url: masterUrl+"/cashclaim/claim-requests" + '/' + id + "",
        type: "GET",
        dataType: "JSON",
        success: function(data) {
            $('#cashclaim-value').text('Cash : RM 0');
        	alert("Claim request sent! sit back relax..");
        },
        error : function() {
            alert("Something's wrong :(");
        }
    });
}