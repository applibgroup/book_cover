import prompt from '@system.prompt';

export default {
    data: {
        container: "",
        display1: false,
        display2: false,
        display3: false,
        display4: false,
        display5: false,
        imageClass: '',
        title: "",
        subTitle: "",
        textContainer: "",
        bottomContainer: "",
        dateValue: "",
        description: "",
        topContainer: "",
        bottomTextContainer:"",
        like:"",
        view:"",
        valueContainer:"",
        readMore:"",
        readMoreText:"",
    },
    props:{
        type: "",
        name:"",
        sub_title: "",
        image: "",
        desc:"",
        rating: "",
        likes:"",
        views: "",
        btncolor:"",
    },
    onInit() {

        if(this.type==="book-card"){
            if(this.rating == 1){
                this.display1 = true;
                this.display2 = false;
                this.display3 = false;
                this.display4 = false;
                this.display5 = false;
            } else if(this.rating == 2){
                this.display1 = true;
                this.display2 = true;
                this.display3 = false;
                this.display4 = false;
                this.display5 = false;
            }else if(this.rating == 3){
                this.display1 = true;
                this.display2 = true;
                this.display3 = true;
                this.display4 = false;
                this.display5 = false;
            }else if(this.rating == 4){
                this.display1 = true;
                this.display2 = true;
                this.display3 = true;
                this.display4 = true;
                this.display5 = false;
            }else if(this.rating == 5){
                this.display1 = true;
                this.display2 = true;
                this.display3 = true;
                this.display4 = true;
                this.display5 = true;
            }
            this.container="book-card";
            this.imageClass="image";
            this.starContainer="starContainer";
            this.stars="stars";
            this.title="name";
            this.subTitle= "spec";
            this.textContainer="textContainer";
            this.bottomContainer="bottomContainer";
            this.dateValue="text";
            this.topContainer="topContainer";
            this.bottomTextContainer="bottomTextContainer";
        }
    },
}

