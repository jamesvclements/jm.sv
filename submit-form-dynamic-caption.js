const CAPTIONS = {
    both: 'Opt for tactical posts about running a one-person studio or divergent personal reflections.',
    work: 'Just tactical posts about running a one-person studio with modern software.',
    'not-work':
        'Just divergent personal reflections orbiting around tech, art, and mental health.',
};

function setSubscribeCaption() {
    const preference = $(`input[name='preference']:checked`).val();
    const caption = CAPTIONS[preference];
    $('.subscribe-text-caption').html(caption);
}

$(`input[name='preference']`).each((_, input) => {
    $(input).on('change', setSubscribeCaption);
});
