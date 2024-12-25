
  document.getElementById('btn-mensal').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('plano-mensal').style.display = 'block';
    document.getElementById('plano-anual').style.display = 'none';
  });

  document.getElementById('btn-anual').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('plano-mensal').style.display = 'none';
    document.getElementById('plano-anual').style.display = 'block';
  });
