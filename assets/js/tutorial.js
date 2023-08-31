// Importar o jQuery da CDN diretamente no arquivo JavaScript
const script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
script.integrity = 'sha256-KJzNEg1tX5Le33oVnrw3wBLwR8M/FIVa4ob6W1ZqbuU=';
script.crossOrigin = 'anonymous';

script.onload = function() {
  $(document).ready(function() {
    const steps = $('.step');
    let currentStep = 0;

    updateStep(currentStep);

    $('.next').click(function() {
      if (currentStep < steps.length - 1) {
        currentStep++;
        updateStep(currentStep);
      }
    });

    $('.prev').click(function() {
      if (currentStep > 0) {
        currentStep--;
        updateStep(currentStep);
      }
    });

    function updateStep(stepIndex) {
      steps.removeClass('active');
      steps.eq(stepIndex);
