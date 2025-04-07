const catchphrases = [
    'sponsored by shadowy figures',
    'organic, hand-fed games',
    'hi how r u'
]

const randomIdx = Math.floor(Math.random() * catchphrases.length);

document.getElementById('catchphrase').textContent = catchphrases[randomIdx];