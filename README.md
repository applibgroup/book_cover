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


# License
	Copyright 2013 Mir Ikram Uddin

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
