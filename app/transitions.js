export default function(){
    this.transition(
        this.fromRoute('dashboard'),
        this.toRoute('overview'),
        this.use('toRight'),
        this.reverse('toLeft')
    );
}