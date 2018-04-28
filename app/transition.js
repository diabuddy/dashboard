this.transition(
    this.hasClass('toLeft'),
    this.use('toLeft', {duration:500}),
    this.reverse('toRight')
);