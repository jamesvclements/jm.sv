/*** Info Page  ***/
/* view the top of the screen */
$('html, body').delay(1000);
/* scroll through titles, duration based on content length */
$('h3').each((i, elem) => {
    if (i !== 1) {
        const offset = 24 * 3;
        const contentHeight =
            i !== 0
                ? $(`h3:eq(${i - 1})`)
                      .parent()
                      .siblings()
                      .first()
                      .height()
                : 500;
        const scrollDuration = Math.max(750, contentHeight * 2);
        $('html, body').animate(
            { scrollTop: $(elem).offset().top - offset },
            scrollDuration,
            () => {
                console.log($(elem).text());
                console.log(scrollDuration);
            }
        );
    }
});
/* finish the page scroll */
$('html, body').animate(
    { scrollTop: $('html, body').height() - window.innerHeight },
    1000
);

/*** Article Page ***/
/* view the top of the screen */
$('html, body').delay(1000);
/* scroll through titles, duration based on content length */
$('h2').each((i , elem) => {
	if (i % 2 === 0) {
$('html, body').animate({ scrollTop: $(elem).offset().top - offset}, scrollDuration, () => { console.log($(elem).text()); console.log(scrollDuration); }); }
})
}
   const offset = 24 * 3;
	const contentHeight = i !== 0 ? $(`h3:eq(${i - 1})`).parent().siblings().first().height() : 500;
	const scrollDuration = Math.max(750, contentHeight * 2);
	
/* finish the page scroll */
$('html, body').animate({ scrollTop: $('html, body').height() - window.innerHeight}, 1000);
