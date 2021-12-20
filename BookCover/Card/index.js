import prompt from '@system.prompt';

export default {
    data: {
        container: "",
        datetimevalue:"",
        imageClass: '',
        title: "",
        subTitle: "",
        textContainer: "",
        bottomContainer: "",
        pickerdatetime: "",
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
        likes:"",
        views: "",
        btncolor:"",
    },
    onInit() {
        if(this.type==="book-card"){
            this.container="book-card";
            this.imageClass="image";
            this.starContainer="starContainer";
            this.stars="stars";
            this.title="name";
            this.subTitle= "spec";
            this.textContainer="textContainer";
            this.bottomContainer="bottomContainer";
            this.pickerdatetime="pickerdatetime";
            this.dateValue="text";
            this.topContainer="topContainer";
            this.bottomTextContainer="bottomTextContainer";
            this.valueContainer="valueContainerBlock";
            this.readMore="readMoreBlock";
        }
    },

    changestar(e) {
          var x = document.getElementById("stars");
          document.getElementById("stars");
          if (x.style.display === "none") {
              x.style.display = "block";
          } else {
              x.style.display = "none";
          }
    },
}

