import React, { Component } from 'react';
import {
  Route,
  HashRouter
} from "react-router-dom";

import Nav from './components/Nav'
import Home from './pages/Home'
import FrozenFood from './pages/FrozenFood'
import Livefood from './pages/Livefood'
import Mice from './pages/Mice/Mice';
import Rats from './pages/Rats/Rats';
import Multimammates from './pages/Multimammates/Multimammates';
import GuineaPigs from './pages/GuineaPigs/GuineaPig';
import Rabbits from './pages/Rabbits/Rabbit';
import Locusts from './pages/Livefood/Locusts';
import BlackCrickets from './pages/Livefood/BlackCrickets';

import GetProducts from './components/Product';
import {Image, 
  QuantityDescription, QuantityTitle, 
  QuantityInput, BasketButton, 
  Parent, MainTitle} from './components/index'
  import mouse from './assets/mouse.jpg'

class App extends Component {
  render() {
    return (
      <HashRouter>
          <Nav/>
            <Route exact path="/" component={Home}/>
            <Route path="/frozenfood" component={FrozenFood}/>
            <Route path="/livefood" component={Livefood}/>
            <Route exact path="/mice/" component={Mice}/>
            <Route exact path="/rats" component={Rats}/>
            <Route exact path="/multimammates" component={Multimammates}/>
            <Route exact path="/guineapigs" component={GuineaPigs}/>
            <Route exact path="/rabbits" component={Rabbits}/>
            <Route exact path="/locusts" component={Locusts}/>
            <Route exact path="/blackcrickets" component={BlackCrickets}/>
            {/************* Mice **************/}
            <Route 
              exact path="/mice/pinkies" 
              render={(props) => 
              <GetProducts 
              {...props}  
                render={({ products }) => (
                  products.map((item) =>
                    <div key={item.id}>
                      {item.product_name === "Pinkie Mice" ?
                      <React.Fragment>
                        <MainTitle>{item.product_name}</MainTitle>
                        <Parent>
                          <Image src={mouse}></Image>
                        </Parent>
                        {item.packs.map(pack =>
                          <div key={pack.quantity}>
                              <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                              {pack.retailers
                                  .sort((a,b) => a.price - b.price)
                                  .map(retailer =>
                                      <div key={retailer.company_id}>
                                          <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
                                      </div>
                                  )
                              }
                          </div>
                        )}
                        </React.Fragment>
                        : ''
                      }
                    </div>
                  )
                )} 
              />}
             />
             <Route 
              exact path="/mice/largepinkies" 
              render={(props) => 
              <GetProducts 
              {...props}  
                render={({ products }) => (
                  products.map((item) =>
                    <div key={item.id}>
                      {item.product_name === "Large Pinkie Mice" ?
                      <React.Fragment>
                        <MainTitle>{item.product_name}</MainTitle>
                        <Parent>
                          <Image src={mouse}></Image>
                        </Parent>
                        {item.packs.map(pack =>
                          <div key={pack.quantity}>
                              <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                              {pack.retailers
                                  .sort((a,b) => a.price - b.price)
                                  .map(retailer =>
                                      <div key={retailer.company_id}>
                                          <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
                                      </div>
                                  )
                              }
                          </div>
                        )}
                        </React.Fragment>
                        : ''
                      }
                    </div>
                  )
                )} 
              />}
             />
            <Route 
              exact path="/mice/fuzzies" 
              render={(props) => 
              <GetProducts 
              {...props}  
                render={({ products }) => (
                  products.map((item) =>
                    <div key={item.id}>
                      {item.product_name === "Mouse Fuzzies" ?
                      <React.Fragment>
                        <MainTitle>{item.product_name}</MainTitle>
                        <Parent>
                          <Image src={mouse}></Image>
                        </Parent>
                        {item.packs.map(pack =>
                          <div key={pack.quantity}>
                              <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                              {pack.retailers
                                  .sort((a,b) => a.price - b.price)
                                  .map(retailer =>
                                      <div key={retailer.company_id}>
                                          <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
                                      </div>
                                  )
                              }
                          </div>
                        )}
                        </React.Fragment>
                        : ''
                      }
                    </div>
                  )
                )} 
              />}
             />
            <Route 
              exact path="/mice/hoppers" 
              render={(props) => 
              <GetProducts 
              {...props}  
                render={({ products }) => (
                  products.map((item) =>
                    <div key={item.id}>
                      {item.product_name === "Hoppers" ?
                      <React.Fragment>
                        <MainTitle>{item.product_name}</MainTitle>
                        <Parent>
                          <Image src={mouse}></Image>
                        </Parent>
                        {item.packs.map(pack =>
                          <div key={pack.quantity}>
                              <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                              {pack.retailers
                                  .sort((a,b) => a.price - b.price)
                                  .map(retailer =>
                                      <div key={retailer.company_id}>
                                          <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
                                      </div>
                                  )
                              }
                          </div>
                        )}
                        </React.Fragment>
                        : ''
                      }
                    </div>
                  )
                )} 
              />}
             />
             <Route 
              exact path="/mice/smallmice" 
              render={(props) => 
              <GetProducts 
              {...props}  
                render={({ products }) => (
                  products.map((item) =>
                    <div key={item.id}>
                      {item.product_name === "Small Mice" ?
                      <React.Fragment>
                        <MainTitle>{item.product_name}</MainTitle>
                        <Parent>
                          <Image src={mouse}></Image>
                        </Parent>
                        {item.packs.map(pack =>
                          <div key={pack.quantity}>
                              <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                              {pack.retailers
                                  .sort((a,b) => a.price - b.price)
                                  .map(retailer =>
                                      <div key={retailer.company_id}>
                                          <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
                                      </div>
                                  )
                              }
                          </div>
                        )}
                        </React.Fragment>
                        : ''
                      }
                    </div>
                  )
                )} 
              />}
             />
             <Route 
              exact path="/mice/mediummice" 
              render={(props) => 
              <GetProducts 
              {...props}  
                render={({ products }) => (
                  products.map((item) =>
                    <div key={item.id}>
                      {item.product_name === "Medium Mice" ?
                      <React.Fragment>
                        <MainTitle>{item.product_name}</MainTitle>
                        <Parent>
                          <Image src={mouse}></Image>
                        </Parent>
                        {item.packs.map(pack =>
                          <div key={pack.quantity}>
                              <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                              {pack.retailers
                                  .sort((a,b) => a.price - b.price)
                                  .map(retailer =>
                                      <div key={retailer.company_id}>
                                          <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
                                      </div>
                                  )
                              }
                          </div>
                        )}
                        </React.Fragment>
                        : ''
                      }
                    </div>
                  )
                )} 
              />}
             />
             <Route 
              exact path="/mice/largemice" 
              render={(props) => 
              <GetProducts 
              {...props}  
                render={({ products }) => (
                  products.map((item) =>
                    <div key={item.id}>
                      {item.product_name === "Large Mice" ?
                      <React.Fragment>
                        <MainTitle>{item.product_name}</MainTitle>
                        <Parent>
                          <Image src={mouse}></Image>
                        </Parent>
                        {item.packs.map(pack =>
                          <div key={pack.quantity}>
                              <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                              {pack.retailers
                                  .sort((a,b) => a.price - b.price)
                                  .map(retailer =>
                                      <div key={retailer.company_id}>
                                          <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
                                      </div>
                                  )
                              }
                          </div>
                        )}
                        </React.Fragment>
                        : ''
                      }
                    </div>
                  )
                )} 
              />}
             />
             <Route 
              exact path="/mice/extralargemice" 
              render={(props) => 
              <GetProducts 
              {...props}  
                render={({ products }) => (
                  products.map((item) =>
                    <div key={item.id}>
                      {item.product_name === "Extra Large Mice" ?
                      <React.Fragment>
                        <MainTitle>{item.product_name}</MainTitle>
                        <Parent>
                          <Image src={mouse}></Image>
                        </Parent>
                        {item.packs.map(pack =>
                          <div key={pack.quantity}>
                              <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                              {pack.retailers
                                  .sort((a,b) => a.price - b.price)
                                  .map(retailer =>
                                      <div key={retailer.company_id}>
                                          <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
                                      </div>
                                  )
                              }
                          </div>
                        )}
                        </React.Fragment>
                        : ''
                      }
                    </div>
                  )
                )} 
              />}
             />
             {/************* Rats  *********/}
             <Route 
              exact path="/rats/ratpups" 
              render={(props) => 
              <GetProducts 
              {...props}  
                render={({ products }) => (
                  products.map((item) =>
                    <div key={item.id}>
                      {item.product_name === "Rat Pups" ?
                      <React.Fragment>
                        <MainTitle>{item.product_name}</MainTitle>
                        <Parent>
                          <Image src={mouse}></Image>
                        </Parent>
                        {item.packs.map(pack =>
                          <div key={pack.quantity}>
                              <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                              {pack.retailers
                                  .sort((a,b) => a.price - b.price)
                                  .map(retailer =>
                                      <div key={retailer.company_id}>
                                          <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
                                      </div>
                                  )
                              }
                          </div>
                        )}
                        </React.Fragment>
                        : ''
                      }
                    </div>
                  )
                )} 
              />}
             />
             <Route 
              exact path="/rats/ratfuzzies" 
              render={(props) => 
              <GetProducts 
              {...props}  
                render={({ products }) => (
                  products.map((item) =>
                    <div key={item.id}>
                      {item.product_name === "Rat Fuzzies" ?
                      <React.Fragment>
                        <MainTitle>{item.product_name}</MainTitle>
                        <Parent>
                          <Image src={mouse}></Image>
                        </Parent>
                        {item.packs.map(pack =>
                          <div key={pack.quantity}>
                              <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                              {pack.retailers
                                  .sort((a,b) => a.price - b.price)
                                  .map(retailer =>
                                      <div key={retailer.company_id}>
                                          <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
                                      </div>
                                  )
                              }
                          </div>
                        )}
                        </React.Fragment>
                        : ''
                      }
                    </div>
                  )
                )} 
              />}
             />
             <Route 
              exact path="/rats/smallweaners" 
              render={(props) => 
              <GetProducts 
              {...props}  
                render={({ products }) => (
                  products.map((item) =>
                    <div key={item.id}>
                      {item.product_name === "Small Weaner Rats" ?
                      <React.Fragment>
                        <MainTitle>{item.product_name}</MainTitle>
                        <Parent>
                          <Image src={mouse}></Image>
                        </Parent>
                        {item.packs.map(pack =>
                          <div key={pack.quantity}>
                              <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                              {pack.retailers
                                  .sort((a,b) => a.price - b.price)
                                  .map(retailer =>
                                      <div key={retailer.company_id}>
                                          <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
                                      </div>
                                  )
                              }
                          </div>
                        )}
                        </React.Fragment>
                        : ''
                      }
                    </div>
                  )
                )} 
              />}
             />
             <Route 
              exact path="/rats/largeweaners" 
              render={(props) => 
              <GetProducts 
              {...props}  
                render={({ products }) => (
                  products.map((item) =>
                    <div key={item.id}>
                      {item.product_name === "Large Weaner Rats" ?
                      <React.Fragment>
                        <MainTitle>{item.product_name}</MainTitle>
                        <Parent>
                          <Image src={mouse}></Image>
                        </Parent>
                        {item.packs.map(pack =>
                          <div key={pack.quantity}>
                              <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                              {pack.retailers
                                  .sort((a,b) => a.price - b.price)
                                  .map(retailer =>
                                      <div key={retailer.company_id}>
                                          <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
                                      </div>
                                  )
                              }
                          </div>
                        )}
                        </React.Fragment>
                        : ''
                      }
                    </div>
                  )
                )} 
              />}
             />
             <Route 
              exact path="/rats/smallrats" 
              render={(props) => 
              <GetProducts 
              {...props}  
                render={({ products }) => (
                  products.map((item) =>
                    <div key={item.id}>
                      {item.product_name === "Small Rats" ?
                      <React.Fragment>
                        <MainTitle>{item.product_name}</MainTitle>
                        <Parent>
                          <Image src={mouse}></Image>
                        </Parent>
                        {item.packs.map(pack =>
                          <div key={pack.quantity}>
                              <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                              {pack.retailers
                                  .sort((a,b) => a.price - b.price)
                                  .map(retailer =>
                                      <div key={retailer.company_id}>
                                          <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
                                      </div>
                                  )
                              }
                          </div>
                        )}
                        </React.Fragment>
                        : ''
                      }
                    </div>
                  )
                )} 
              />}
             />
             <Route 
              exact path="/rats/mediumrats" 
              render={(props) => 
              <GetProducts 
              {...props}  
                render={({ products }) => (
                  products.map((item) =>
                    <div key={item.id}>
                      {item.product_name === "Medium Rats" ?
                      <React.Fragment>
                        <MainTitle>{item.product_name}</MainTitle>
                        <Parent>
                          <Image src={mouse}></Image>
                        </Parent>
                        {item.packs.map(pack =>
                          <div key={pack.quantity}>
                              <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                              {pack.retailers
                                  .sort((a,b) => a.price - b.price)
                                  .map(retailer =>
                                      <div key={retailer.company_id}>
                                          <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
                                      </div>
                                  )
                              }
                          </div>
                        )}
                        </React.Fragment>
                        : ''
                      }
                    </div>
                  )
                )} 
              />}
             />
             <Route 
              exact path="/rats/largerats" 
              render={(props) => 
              <GetProducts 
              {...props}  
                render={({ products }) => (
                  products.map((item) =>
                    <div key={item.id}>
                      {item.product_name === "Large Rats" ?
                      <React.Fragment>
                        <MainTitle>{item.product_name}</MainTitle>
                        <Parent>
                          <Image src={mouse}></Image>
                        </Parent>
                        {item.packs.map(pack =>
                          <div key={pack.quantity}>
                              <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                              {pack.retailers
                                  .sort((a,b) => a.price - b.price)
                                  .map(retailer =>
                                      <div key={retailer.company_id}>
                                          <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
                                      </div>
                                  )
                              }
                          </div>
                        )}
                        </React.Fragment>
                        : ''
                      }
                    </div>
                  )
                )} 
              />}
             />
             <Route 
              exact path="/rats/extralargerats" 
              render={(props) => 
              <GetProducts 
              {...props}  
                render={({ products }) => (
                  products.map((item) =>
                    <div key={item.id}>
                      {item.product_name === "Extra Large Rats" ?
                      <React.Fragment>
                        <MainTitle>{item.product_name}</MainTitle>
                        <Parent>
                          <Image src={mouse}></Image>
                        </Parent>
                        {item.packs.map(pack =>
                          <div key={pack.quantity}>
                              <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                              {pack.retailers
                                  .sort((a,b) => a.price - b.price)
                                  .map(retailer =>
                                      <div key={retailer.company_id}>
                                          <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
                                      </div>
                                  )
                              }
                          </div>
                        )}
                        </React.Fragment>
                        : ''
                      }
                    </div>
                  )
                )} 
              />}
             />
             <Route 
              exact path="/rats/giantrats" 
              render={(props) => 
              <GetProducts 
              {...props}  
                render={({ products }) => (
                  products.map((item) =>
                    <div key={item.id}>
                      {item.product_name === "Giant Rats" ?
                      <React.Fragment>
                        <MainTitle>{item.product_name}</MainTitle>
                        <Parent>
                          <Image src={mouse}></Image>
                        </Parent>
                        {item.packs.map(pack =>
                          <div key={pack.quantity}>
                              <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                              {pack.retailers
                                  .sort((a,b) => a.price - b.price)
                                  .map(retailer =>
                                      <div key={retailer.company_id}>
                                          <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
                                      </div>
                                  )
                              }
                          </div>
                        )}
                        </React.Fragment>
                        : ''
                      }
                    </div>
                  )
                )} 
              />}
             />
            {/************* Multimammate Mice  **********/}
            <Route 
              exact path="/multis/small" 
              render={(props) => 
              <GetProducts 
              {...props}  
                render={({ products }) => (
                  products.map((item) =>
                    <div key={item.id}>
                      {item.product_name === "Small Multimammate Mice" ?
                      <React.Fragment>
                        <MainTitle>{item.product_name}</MainTitle>
                        <Parent>
                          <Image src={mouse}></Image>
                        </Parent>
                        {item.packs.map(pack =>
                          <div key={pack.quantity}>
                              <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                              {pack.retailers
                                  .sort((a,b) => a.price - b.price)
                                  .map(retailer =>
                                      <div key={retailer.company_id}>
                                          <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
                                      </div>
                                  )
                              }
                          </div>
                        )}
                        </React.Fragment>
                        : ''
                      }
                    </div>
                  )
                )} 
              />}
             />
             <Route 
              exact path="/multis/large" 
              render={(props) => 
              <GetProducts 
              {...props}  
                render={({ products }) => (
                  products.map((item) =>
                    <div key={item.id}>
                      {item.product_name === "Large Multimammate Mice" ?
                      <React.Fragment>
                        <MainTitle>{item.product_name}</MainTitle>
                        <Parent>
                          <Image src={mouse}></Image>
                        </Parent>
                        {item.packs.map(pack =>
                          <div key={pack.quantity}>
                              <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                              {pack.retailers
                                  .sort((a,b) => a.price - b.price)
                                  .map(retailer =>
                                      <div key={retailer.company_id}>
                                          <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
                                      </div>
                                  )
                              }
                          </div>
                        )}
                        </React.Fragment>
                        : ''
                      }
                    </div>
                  )
                )} 
              />}
             />
             <Route 
              exact path="/multis/extralarge" 
              render={(props) => 
              <GetProducts 
              {...props}  
                render={({ products }) => (
                  products.map((item) =>
                    <div key={item.id}>
                      {item.product_name === "Extra Large Multimammate Mice" ?
                      <React.Fragment>
                        <MainTitle>{item.product_name}</MainTitle>
                        <Parent>
                          <Image src={mouse}></Image>
                        </Parent>
                        {item.packs.map(pack =>
                          <div key={pack.quantity}>
                              <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                              {pack.retailers
                                  .sort((a,b) => a.price - b.price)
                                  .map(retailer =>
                                      <div key={retailer.company_id}>
                                          <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
                                      </div>
                                  )
                              }
                          </div>
                        )}
                        </React.Fragment>
                        : ''
                      }
                    </div>
                  )
                )} 
              />}
             />
             {/************* Guinea Pigs  **********/}
             <Route 
              exact path="/guineapigs/miniguineapigs" 
              render={(props) => 
              <GetProducts 
              {...props}  
                render={({ products }) => (
                  products.map((item) =>
                    <div key={item.id}>
                      {item.product_name === "Mini Guinea Pigs" ?
                      <React.Fragment>
                        <MainTitle>{item.product_name}</MainTitle>
                        <Parent>
                          <Image src={mouse}></Image>
                        </Parent>
                        {item.packs.map(pack =>
                          <div key={pack.quantity}>
                              <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                              {pack.retailers
                                  .sort((a,b) => a.price - b.price)
                                  .map(retailer =>
                                      <div key={retailer.company_id}>
                                          <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
                                      </div>
                                  )
                              }
                          </div>
                        )}
                        </React.Fragment>
                        : ''
                      }
                    </div>
                  )
                )} 
              />}
             />
             <Route 
              exact path="/guineapigs/smallguineapigs" 
              render={(props) => 
              <GetProducts 
              {...props}  
                render={({ products }) => (
                  products.map((item) =>
                    <div key={item.id}>
                      {item.product_name === "Small Guinea Pigs" ?
                      <React.Fragment>
                        <MainTitle>{item.product_name}</MainTitle>
                        <Parent>
                          <Image src={mouse}></Image>
                        </Parent>
                        {item.packs.map(pack =>
                          <div key={pack.quantity}>
                              <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                              {pack.retailers
                                  .sort((a,b) => a.price - b.price)
                                  .map(retailer =>
                                      <div key={retailer.company_id}>
                                          <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
                                      </div>
                                  )
                              }
                          </div>
                        )}
                        </React.Fragment>
                        : ''
                      }
                    </div>
                  )
                )} 
              />}
             />
             <Route 
              exact path="/guineapigs/mediumguineapigs" 
              render={(props) => 
              <GetProducts 
              {...props}  
                render={({ products }) => (
                  products.map((item) =>
                    <div key={item.id}>
                      {item.product_name === "Medium/Large Guinea Pigs" ?
                      <React.Fragment>
                        <MainTitle>{item.product_name}</MainTitle>
                        <Parent>
                          <Image src={mouse}></Image>
                        </Parent>
                        {item.packs.map(pack =>
                          <div key={pack.quantity}>
                              <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                              {pack.retailers
                                  .sort((a,b) => a.price - b.price)
                                  .map(retailer =>
                                      <div key={retailer.company_id}>
                                          <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
                                      </div>
                                  )
                              }
                          </div>
                        )}
                        </React.Fragment>
                        : ''
                      }
                    </div>
                  )
                )} 
              />}
             />
             <Route 
              exact path="/guineapigs/largeguineapigs" 
              render={(props) => 
              <GetProducts 
              {...props}  
                render={({ products }) => (
                  products.map((item) =>
                    <div key={item.id}>
                      {item.product_name === "Extra Large Guinea Pigs" ?
                      <React.Fragment>
                        <MainTitle>{item.product_name}</MainTitle>
                        <Parent>
                          <Image src={mouse}></Image>
                        </Parent>
                        {item.packs.map(pack =>
                          <div key={pack.quantity}>
                              <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                              {pack.retailers
                                  .sort((a,b) => a.price - b.price)
                                  .map(retailer =>
                                      <div key={retailer.company_id}>
                                          <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
                                      </div>
                                  )
                              }
                          </div>
                        )}
                        </React.Fragment>
                        : ''
                      }
                    </div>
                  )
                )} 
              />}
             />
             {/************* Rabbits  **********/}
             <Route 
              exact path="/rabbits/dayoldrabbits" 
              render={(props) => 
              <GetProducts 
              {...props}  
                render={({ products }) => (
                  products.map((item) =>
                    <div key={item.id}>
                      {item.product_name === "Day Old Rabbits" ?
                      <React.Fragment>
                        <MainTitle>{item.product_name}</MainTitle>
                        <Parent>
                          <Image src={mouse}></Image>
                        </Parent>
                        {item.packs.map(pack =>
                          <div key={pack.quantity}>
                              <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                              {pack.retailers
                                  .sort((a,b) => a.price - b.price)
                                  .map(retailer =>
                                      <div key={retailer.company_id}>
                                          <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
                                      </div>
                                  )
                              }
                          </div>
                        )}
                        </React.Fragment>
                        : ''
                      }
                    </div>
                  )
                )} 
              />}
             />
             <Route 
              exact path="/rabbits/minirabbits" 
              render={(props) => 
              <GetProducts 
              {...props}  
                render={({ products }) => (
                  products.map((item) =>
                    <div key={item.id}>
                      {item.product_name === "Mini Rabbits" ?
                      <React.Fragment>
                        <MainTitle>{item.product_name}</MainTitle>
                        <Parent>
                          <Image src={mouse}></Image>
                        </Parent>
                        {item.packs.map(pack =>
                          <div key={pack.quantity}>
                              <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                              {pack.retailers
                                  .sort((a,b) => a.price - b.price)
                                  .map(retailer =>
                                      <div key={retailer.company_id}>
                                          <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
                                      </div>
                                  )
                              }
                          </div>
                        )}
                        </React.Fragment>
                        : ''
                      }
                    </div>
                  )
                )} 
              />}
             />
             <Route 
              exact path="/rabbits/smallrabbits" 
              render={(props) => 
              <GetProducts 
              {...props}  
                render={({ products }) => (
                  products.map((item) =>
                    <div key={item.id}>
                      {item.product_name === "Small Rabbits" ?
                      <React.Fragment>
                        <MainTitle>{item.product_name}</MainTitle>
                        <Parent>
                          <Image src={mouse}></Image>
                        </Parent>
                        {item.packs.map(pack =>
                          <div key={pack.quantity}>
                              <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                              {pack.retailers
                                  .sort((a,b) => a.price - b.price)
                                  .map(retailer =>
                                      <div key={retailer.company_id}>
                                          <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
                                      </div>
                                  )
                              }
                          </div>
                        )}
                        </React.Fragment>
                        : ''
                      }
                    </div>
                  )
                )} 
              />}
             />
             <Route 
              exact path="/rabbits/mediumrabbits" 
              render={(props) => 
              <GetProducts 
              {...props}  
                render={({ products }) => (
                  products.map((item) =>
                    <div key={item.id}>
                      {item.product_name === "Medium Rabbits" ?
                      <React.Fragment>
                        <MainTitle>{item.product_name}</MainTitle>
                        <Parent>
                          <Image src={mouse}></Image>
                        </Parent>
                        {item.packs.map(pack =>
                          <div key={pack.quantity}>
                              <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                              {pack.retailers
                                  .sort((a,b) => a.price - b.price)
                                  .map(retailer =>
                                      <div key={retailer.company_id}>
                                          <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
                                      </div>
                                  )
                              }
                          </div>
                        )}
                        </React.Fragment>
                        : ''
                      }
                    </div>
                  )
                )} 
              />}
             />
             <Route 
              exact path="/rabbits/largerabbits" 
              render={(props) => 
              <GetProducts 
              {...props}  
                render={({ products }) => (
                  products.map((item) =>
                    <div key={item.id}>
                      {item.product_name === "Large Rabbits" ?
                      <React.Fragment>
                        <MainTitle>{item.product_name}</MainTitle>
                        <Parent>
                          <Image src={mouse}></Image>
                        </Parent>
                        {item.packs.map(pack =>
                          <div key={pack.quantity}>
                              <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                              {pack.retailers
                                  .sort((a,b) => a.price - b.price)
                                  .map(retailer =>
                                      <div key={retailer.company_id}>
                                          <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
                                      </div>
                                  )
                              }
                          </div>
                        )}
                        </React.Fragment>
                        : ''
                      }
                    </div>
                  )
                )} 
              />}
             />
             <Route 
              exact path="/rabbits/extralargerabbits" 
              render={(props) => 
              <GetProducts 
              {...props}  
                render={({ products }) => (
                  products.map((item) =>
                    <div key={item.id}>
                      {item.product_name === "Extra Large Rabbits" ?
                      <React.Fragment>
                        <MainTitle>{item.product_name}</MainTitle>
                        <Parent>
                          <Image src={mouse}></Image>
                        </Parent>
                        {item.packs.map(pack =>
                          <div key={pack.quantity}>
                              <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                              {pack.retailers
                                  .sort((a,b) => a.price - b.price)
                                  .map(retailer =>
                                      <div key={retailer.company_id}>
                                          <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
                                      </div>
                                  )
                              }
                          </div>
                        )}
                        </React.Fragment>
                        : ''
                      }
                    </div>
                  )
                )} 
              />}
             />
             <Route 
              exact path="/rabbits/giantrabbits" 
              render={(props) => 
              <GetProducts 
              {...props}  
                render={({ products }) => (
                  products.map((item) =>
                    <div key={item.id}>
                      {item.product_name === "Giant Rabbits" ?
                      <React.Fragment>
                        <MainTitle>{item.product_name}</MainTitle>
                        <Parent>
                          <Image src={mouse}></Image>
                        </Parent>
                        {item.packs.map(pack =>
                          <div key={pack.quantity}>
                              <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                              {pack.retailers
                                  .sort((a,b) => a.price - b.price)
                                  .map(retailer =>
                                      <div key={retailer.company_id}>
                                          <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
                                      </div>
                                  )
                              }
                          </div>
                        )}
                        </React.Fragment>
                        : ''
                      }
                    </div>
                  )
                )} 
              />}
             />
            {/************* Hamsters **********/}
            <Route 
              exact path="/hamsters" 
              render={(props) => 
              <GetProducts 
              {...props}  
                render={({ products }) => (
                  products.map((item) =>
                    <div key={item.id}>
                      {item.product_name === "Medium/Large Hamsters" ?
                      <React.Fragment>
                        <MainTitle>{item.product_name}</MainTitle>
                        <Parent>
                          <Image src={mouse}></Image>
                        </Parent>
                        {item.packs.map(pack =>
                          <div key={pack.quantity}>
                              <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                              {pack.retailers
                                  .sort((a,b) => a.price - b.price)
                                  .map(retailer =>
                                      <div key={retailer.company_id}>
                                          <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
                                      </div>
                                  )
                              }
                          </div>
                        )}
                        </React.Fragment>
                        : ''
                      }
                    </div>
                  )
                )} 
              />}
             />
            {/************* Gerbils **********/}
            <Route 
              exact path="/gerbils" 
              render={(props) => 
              <GetProducts 
              {...props}  
                render={({ products }) => (
                  products.map((item) =>
                    <div key={item.id}>
                      {item.product_name === "Medium Gerbils" ?
                      <React.Fragment>
                        <MainTitle>{item.product_name}</MainTitle>
                        <Parent>
                          <Image src={mouse}></Image>
                        </Parent>
                        {item.packs.map(pack =>
                          <div key={pack.quantity}>
                              <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                              {pack.retailers
                                  .sort((a,b) => a.price - b.price)
                                  .map(retailer =>
                                      <div key={retailer.company_id}>
                                          <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
                                      </div>
                                  )
                              }
                          </div>
                        )}
                        </React.Fragment>
                        : ''
                      }
                    </div>
                  )
                )} 
              />}
             />
             {/************* Chicks **********/}
             <Route 
              exact path="/chicks" 
              render={(props) => 
              <GetProducts 
              {...props}  
                render={({ products }) => (
                  products.map((item) =>
                    <div key={item.id}>
                      {item.product_name === "Chicks" ?
                      <React.Fragment>
                        <MainTitle>{item.product_name}</MainTitle>
                        <Parent>
                          <Image src={mouse}></Image>
                        </Parent>
                        {item.packs.map(pack =>
                          <div key={pack.quantity}>
                              <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                              {pack.retailers
                                  .sort((a,b) => a.price - b.price)
                                  .map(retailer =>
                                      <div key={retailer.company_id}>
                                          <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
                                      </div>
                                  )
                              }
                          </div>
                        )}
                        </React.Fragment>
                        : ''
                      }
                    </div>
                  )
                )} 
              />}
             />
             {/************* Quail **********/}
             <Route 
              exact path="/quail" 
              render={(props) => 
              <GetProducts 
              {...props}  
                render={({ products }) => (
                  products.map((item) =>
                    <div key={item.id}>
                      {item.product_name === "Large Quail" ?
                      <React.Fragment>
                        <MainTitle>{item.product_name}</MainTitle>
                        <Parent>
                          <Image src={mouse}></Image>
                        </Parent>
                        {item.packs.map(pack =>
                          <div key={pack.quantity}>
                              <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                              {pack.retailers
                                  .sort((a,b) => a.price - b.price)
                                  .map(retailer =>
                                      <div key={retailer.company_id}>
                                          <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
                                      </div>
                                  )
                              }
                          </div>
                        )}
                        </React.Fragment>
                        : ''
                      }
                    </div>
                  )
                )} 
              />}
             />
            {/************* Locusts **********/}
            <Route 
              exact path="/locusts/hatchlings" 
              render={(props) => 
              <GetProducts 
              {...props}  
                render={({ products }) => (
                  products.map((item) =>
                    <div key={item.id}>
                      {item.product_name === "Hatchling Locusts" ?
                      <React.Fragment>
                        <MainTitle>{item.product_name}</MainTitle>
                        <Parent>
                          <Image src={mouse}></Image>
                        </Parent>
                        {item.packs.map(pack =>
                          <div key={pack.quantity}>
                              <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                              {pack.retailers
                                  .sort((a,b) => a.price - b.price)
                                  .map(retailer =>
                                      <div key={retailer.company_id}>
                                          <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
                                      </div>
                                  )
                              }
                          </div>
                        )}
                        </React.Fragment>
                        : ''
                      }
                    </div>
                  )
                )} 
              />}
             />
              <Route 
              exact path="/locusts/small" 
              render={(props) => 
              <GetProducts 
              {...props}  
                render={({ products }) => (
                  products.map((item) =>
                    <div key={item.id}>
                      {item.product_name === "Small Locusts" ?
                      <React.Fragment>
                        <MainTitle>{item.product_name}</MainTitle>
                        <Parent>
                          <Image src={mouse}></Image>
                        </Parent>
                        {item.packs.map(pack =>
                          <div key={pack.quantity}>
                              <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                              {pack.retailers
                                  .sort((a,b) => a.price - b.price)
                                  .map(retailer =>
                                      <div key={retailer.company_id}>
                                          <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
                                      </div>
                                  )
                              }
                          </div>
                        )}
                        </React.Fragment>
                        : ''
                      }
                    </div>
                  )
                )} 
              />}
             />
              <Route 
              exact path="/locusts/medium" 
              render={(props) => 
              <GetProducts 
              {...props}  
                render={({ products }) => (
                  products.map((item) =>
                    <div key={item.id}>
                      {item.product_name === "Medium Locusts" ?
                      <React.Fragment>
                        <MainTitle>{item.product_name}</MainTitle>
                        <Parent>
                          <Image src={mouse}></Image>
                        </Parent>
                        {item.packs.map(pack =>
                          <div key={pack.quantity}>
                              <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                              {pack.retailers
                                  .sort((a,b) => a.price - b.price)
                                  .map(retailer =>
                                      <div key={retailer.company_id}>
                                          <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
                                      </div>
                                  )
                              }
                          </div>
                        )}
                        </React.Fragment>
                        : ''
                      }
                    </div>
                  )
                )} 
              />}
             />
              <Route 
              exact path="/locusts/large" 
              render={(props) => 
              <GetProducts 
              {...props}  
                render={({ products }) => (
                  products.map((item) =>
                    <div key={item.id}>
                      {item.product_name === "Large Locusts" ?
                      <React.Fragment>
                        <MainTitle>{item.product_name}</MainTitle>
                        <Parent>
                          <Image src={mouse}></Image>
                        </Parent>
                        {item.packs.map(pack =>
                          <div key={pack.quantity}>
                              <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                              {pack.retailers
                                  .sort((a,b) => a.price - b.price)
                                  .map(retailer =>
                                      <div key={retailer.company_id}>
                                          <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
                                      </div>
                                  )
                              }
                          </div>
                        )}
                        </React.Fragment>
                        : ''
                      }
                    </div>
                  )
                )} 
              />}
             />
              <Route 
              exact path="/locusts/extralarge" 
              render={(props) => 
              <GetProducts 
              {...props}  
                render={({ products }) => (
                  products.map((item) =>
                    <div key={item.id}>
                      {item.product_name === "Extra Large Locusts" ?
                      <React.Fragment>
                        <MainTitle>{item.product_name}</MainTitle>
                        <Parent>
                          <Image src={mouse}></Image>
                        </Parent>
                        {item.packs.map(pack =>
                          <div key={pack.quantity}>
                              <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                              {pack.retailers
                                  .sort((a,b) => a.price - b.price)
                                  .map(retailer =>
                                      <div key={retailer.company_id}>
                                          <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
                                      </div>
                                  )
                              }
                          </div>
                        )}
                        </React.Fragment>
                        : ''
                      }
                    </div>
                  )
                )} 
              />}
             />
              <Route 
              exact path="/locusts/adult" 
              render={(props) => 
              <GetProducts 
              {...props}  
                render={({ products }) => (
                  products.map((item) =>
                    <div key={item.id}>
                      {item.product_name === "Adult Locusts" ?
                      <React.Fragment>
                        <MainTitle>{item.product_name}</MainTitle>
                        <Parent>
                          <Image src={mouse}></Image>
                        </Parent>
                        {item.packs.map(pack =>
                          <div key={pack.quantity}>
                              <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                              {pack.retailers
                                  .sort((a,b) => a.price - b.price)
                                  .map(retailer =>
                                      <div key={retailer.company_id}>
                                          <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
                                      </div>
                                  )
                              }
                          </div>
                        )}
                        </React.Fragment>
                        : ''
                      }
                    </div>
                  )
                )} 
              />}
             />
              {/************* Black Crickets **********/}
             <Route 
              exact path="/blackcrickets/micro" 
              render={(props) => 
              <GetProducts 
              {...props}  
                render={({ products }) => (
                  products.map((item) =>
                    <div key={item.id}>
                      {item.product_name === "Micro Black Crickets" ?
                      <React.Fragment>
                        <MainTitle>{item.product_name}</MainTitle>
                        <Parent>
                          <Image src={mouse}></Image>
                        </Parent>
                        {item.packs.map(pack =>
                          <div key={pack.quantity}>
                              <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                              {pack.retailers
                                  .sort((a,b) => a.price - b.price)
                                  .map(retailer =>
                                      <div key={retailer.company_id}>
                                          <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
                                      </div>
                                  )
                              }
                          </div>
                        )}
                        </React.Fragment>
                        : ''
                      }
                    </div>
                  )
                )} 
              />}
             />
             <Route 
              exact path="/blackcrickets/small" 
              render={(props) => 
              <GetProducts 
              {...props}  
                render={({ products }) => (
                  products.map((item) =>
                    <div key={item.id}>
                      {item.product_name === "Small Black Crickets" ?
                      <React.Fragment>
                        <MainTitle>{item.product_name}k</MainTitle>
                        <Parent>
                          <Image src={mouse}></Image>
                        </Parent>
                        {item.packs.map(pack =>
                          <div key={pack.quantity}>
                              <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                              {pack.retailers
                                  .sort((a,b) => a.price - b.price)
                                  .map(retailer =>
                                      <div key={retailer.company_id}>
                                          <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
                                      </div>
                                  )
                              }
                          </div>
                        )}
                        </React.Fragment>
                        : ''
                      }
                    </div>
                  )
                )} 
              />}
             />
              <Route 
              exact path="/blackcrickets/mediumsmall" 
              render={(props) => 
              <GetProducts 
              {...props}  
                render={({ products }) => (
                  products.map((item) =>
                    <div key={item.id}>
                      {item.product_name === "Medium Small Black Crickets" ?
                      <React.Fragment>
                        <MainTitle>{item.product_name}</MainTitle>
                        <Parent>
                          <Image src={mouse}></Image>
                        </Parent>
                        {item.packs.map(pack =>
                          <div key={pack.quantity}>
                              <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                              {pack.retailers
                                  .sort((a,b) => a.price - b.price)
                                  .map(retailer =>
                                      <div key={retailer.company_id}>
                                          <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
                                      </div>
                                  )
                              }
                          </div>
                        )}
                        </React.Fragment>
                        : ''
                      }
                    </div>
                  )
                )} 
              />}
             />
             <Route 
              exact path="/blackcrickets/medium" 
              render={(props) => 
              <GetProducts 
              {...props}  
                render={({ products }) => (
                  products.map((item) =>
                    <div key={item.id}>
                      {item.product_name === "Medium Black Crickets" ?
                      <React.Fragment>
                        <MainTitle>{item.product_name}</MainTitle>
                        <Parent>
                          <Image src={mouse}></Image>
                        </Parent>
                        {item.packs.map(pack =>
                          <div key={pack.quantity}>
                              <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                              {pack.retailers
                                  .sort((a,b) => a.price - b.price)
                                  .map(retailer =>
                                      <div key={retailer.company_id}>
                                          <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
                                      </div>
                                  )
                              }
                          </div>
                        )}
                        </React.Fragment>
                        : ''
                      }
                    </div>
                  )
                )} 
              />}
             />
             <Route 
              exact path="/blackcrickets/large" 
              render={(props) => 
              <GetProducts 
              {...props}  
                render={({ products }) => (
                  products.map((item) =>
                    <div key={item.id}>
                      {item.product_name === "Large Black Crickets" ?
                      <React.Fragment>
                        <MainTitle>{item.product_name}</MainTitle>
                        <Parent>
                          <Image src={mouse}></Image>
                        </Parent>
                        {item.packs.map(pack =>
                          <div key={pack.quantity}>
                              <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                              {pack.retailers
                                  .sort((a,b) => a.price - b.price)
                                  .map(retailer =>
                                      <div key={retailer.company_id}>
                                          <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
                                      </div>
                                  )
                              }
                          </div>
                        )}
                        </React.Fragment>
                        : ''
                      }
                    </div>
                  )
                )} 
              />}
             />
             <Route 
              exact path="/blackcrickets/extralarge" 
              render={(props) => 
              <GetProducts 
              {...props}  
                render={({ products }) => (
                  products.map((item) =>
                    <div key={item.id}>
                      {item.product_name === "Extra Large Black Crickets" ?
                      <React.Fragment>
                        <MainTitle>{item.product_name}</MainTitle>
                        <Parent>
                          <Image src={mouse}></Image>
                        </Parent>
                        {item.packs.map(pack =>
                          <div key={pack.quantity}>
                              <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                              {pack.retailers
                                  .sort((a,b) => a.price - b.price)
                                  .map(retailer =>
                                      <div key={retailer.company_id}>
                                          <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
                                      </div>
                                  )
                              }
                          </div>
                        )}
                        </React.Fragment>
                        : ''
                      }
                    </div>
                  )
                )} 
              />}
             />
      </HashRouter>
    );
  }
}

export default App;
