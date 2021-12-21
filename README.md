# Book Cover Library- HarmonyOS

JS library for HarmonyOS ecosystems.

![Screenshot (553)](https://user-images.githubusercontent.com/75530516/146939592-3c48872d-0778-4320-b9cf-bdf76ab4305c.png)


## Installation

Use the below code to import the `Book Cover` in your `entrty/src/main/js/default/pages/index/index.html` file

`<element name="Card" src="../../../../../../node_modules/BookCover/Card/index.hml"></element>`

## Usage

```hml
<div class="container"> 
    <Card type="book-card" name="MY BOOK COVER" sub_title="Souvik Ray" rating="3" image="https://edit.org/images/cat/book-covers-big-2019101610.jpg"></Card>
</div>
```

## Card 

`It has a prop named `type` it denotes which type of card should be displayed in the app.`

| Parameter       | Default               | Description                                                                  |
|-----------------|-----------------------|------------------------------------------------------------------------------|
| name            | null                  | It denotes the name of book                                                  |
| sub_title       | null                  | Sub_title denotes the name of the author                                     |
| rating          | null                  | It will be the number of stars given to the book                             |
| image           | null                  | It will be an image of the book cover                                        |
