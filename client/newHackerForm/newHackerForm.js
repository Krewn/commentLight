Template.newHackerForm.events({
  'submit #hackerForm' : function(event, template) {

    event.preventDefault();

    const hackerName = template.find('#hackerName').value;
    const legalName = template.find('#legalName').value;
    const email = template.find('#email').value;
    const allegiance = template.find('#allegiance').value;

    const newHacker = {
      hackerName: hackerName,
      legalName: legalName,
      email: email,
      allegiance: allegiance
    }

    Hackers.insert(newHacker);
    alert(`Created: ${newHacker.legalName} (${newHacker.hackerName})`);
  }

});
