document.addEventListener('DOMContentLoaded', () => {
  const partyButtons = document.querySelectorAll('.party-btn');
  const timeButtons = document.querySelectorAll('.time-btn');
  const result = document.querySelector('#reservation-result');
  let selectedParty = '2';
  let selectedTime = '5:30 PM';

  function select(buttons, clicked) {
    buttons.forEach(btn => btn.classList.remove('active'));
    clicked.classList.add('active');
  }

  partyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      select(partyButtons, btn);
      selectedParty = btn.dataset.party;
    });
  });

  timeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      select(timeButtons, btn);
      selectedTime = btn.dataset.time;
    });
  });

  const confirm = document.querySelector('#confirm-reservation');
  if (confirm && result) {
    confirm.addEventListener('click', () => {
      result.textContent = `Reservation request ready for ${selectedParty} guest${selectedParty === '1' ? '' : 's'} at ${selectedTime}.`;
      result.classList.remove('d-none');
      result.focus();
    });
  }
});
