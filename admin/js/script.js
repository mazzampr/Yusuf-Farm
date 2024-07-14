
    document.getElementById('cetak').addEventListener('click', function() {
        document.getElementById('alertDialog').classList.add('visible');
    });

    document.querySelector('.alert-ok-btn').addEventListener('click', function() {
        document.getElementById('alertDialog').classList.remove('visible');
    });
    document.querySelector('.alert-no-btn').addEventListener('click', function() {
        document.getElementById('alertDialog').classList.remove('visible');
    });
