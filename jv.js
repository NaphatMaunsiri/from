var sum = new Vue({
    el: '#sum',
    data: {
     
        student: {
            name: '',
            lastname: '',
            id: '',
            email: '',
            gpa: ''
        },
        students:[
            {name:'Naphat',lastname:'Maunsiri',id:'6304101324',email:'abcdef@hotmail.com',gpa:'4.00'},
            {name:'Tony',lastname:'Pee',id:'6304101325',email:'ghijkl@hotmail.com',gpa:'3.50'}
        ],
    },
    methods:{
        Add:function(){
            this.students.push({
                name:this.student.name,
                lastname:this.student.lastname,
                id:this.student.id,
                email:this.student.email,
                gpa:this.student.gpa,
            });
            this.student.name='',
            this.student.lastname='',
            this.student.id='',
            this.student.email='',
            this.student.gpa=''
        },
        DeleteS:function(n){
            this.students.splice(n,1)
        }
    }
})