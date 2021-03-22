import React from 'react';
import './App.css';
import Button from "./components/Button";
import Product from "./components/Product";
import Tile from "./components/Tile";

// afbeeldingen
import bagOne from "./assets/bag_1.png"
import bagTwo from "./assets/bag_2.png"
import bagThree from "./assets/bag_3.png"
import bagFour from "./assets/bag_4.png"
import brand from "./assets/brand.png"
import ourStory from "./assets/our_story.png"


function App() {
  return (
      <>
        <h1>Handbags & Purses</h1>
        <nav>
            <Button
                text="to the collection"
            />
            <Button
                text="shop all bags"
            />
            <Button
                text="pre-orders"
            />
        </nav>
        <main>
            <Product
                bagSellingPoint="Best seller"
                bagImage={bagOne}
                bagImageTitle="handy-bag"
                bagName="The handy bag"
                price="450"
            />
            <Product
                bagSellingPoint="Best seller"
                bagImage={bagTwo}
                bagImageTitle="stylish-bag"
                bagName="The stylish bag"
                price="250"
            />
            <Product
                bagSellingPoint="New collection"
                bagImage={bagThree}
                bagImageTitle="simple-bag"
                bagName="The simple bag"
                price="300"
            />
            <Product
                bagSellingPoint="New collection"
                bagImage={bagFour}
                bagImageTitle="trendy-bag"
                bagName="The trendy bag"
                price="150"
            />
        </main>
        <footer>
            <Tile
                title="the brand"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolores dolorum id itaque molestiae neque odit quas ratione tempora voluptatibus."
            >
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus excepturi illo modi quo rerum sequi veniam. Ducimus natus recusandae repudiandae!</p>
            </Tile>
            <Tile
                image={brand}
                imageAlt="our-brand"
            />
            <Tile
                image={ourStory}
                imageAlt="designers"
            />
            <Tile
                title="our story"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad adipisci atque consequuntur cumque, cupiditate dignissimos id illum iure laboriosam officiis quasi quo, recusandae repellendus reprehenderit repudiandae velit veritatis voluptas!"
            />
        </footer>
      </>
  );
}

export default App;



