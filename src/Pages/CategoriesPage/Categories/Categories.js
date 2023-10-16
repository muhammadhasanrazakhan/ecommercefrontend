import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import apple from '../../../assets/images/categories/apple.webp';
import baby from '../../../assets/images/categories/baby.webp';
import beauty from '../../../assets/images/categories/beauty.webp';
import breakfast from '../../../assets/images/categories/Breakfast.webp';
import vegetable from '../../../assets/images/categories/cabbage.webp';
import fish from '../../../assets/images/categories/carp-fish.webp';
import cat from '../../../assets/images/categories/cat.webp';
import chili from '../../../assets/images/categories/chili-sauce.webp';
import chips from '../../../assets/images/categories/chips.webp';
import cleaner from '../../../assets/images/categories/cleaner.webp';
import cookie from '../../../assets/images/categories/cookie.webp';
import cooking from '../../../assets/images/categories/Cooking.webp';
import dumbbell from '../../../assets/images/categories/dumbbell.webp';
import honey from '../../../assets/images/categories/honey.webp';
import milk from '../../../assets/images/categories/milk.webp';
import drink from '../../../assets/images/categories/soft-drink.webp';
import jam from '../../../assets/images/categories/strawberry-jam.webp';
//import { loadProductsAsync } from '../../../redux/feathers/productsSlice';
import { clearErrors, getProduct } from "../../../actions/productAction";
import { useNavigate, useMatch } from 'react-router-dom';
import CartTracker from '../../HomePage/CartTracker/CartTracker';
import DailyNeeds from '../../SharedComponents/DailyNeeds/DailyNeeds';
import Footer from '../../SharedComponents/Footer/Footer';
import TopNavigation from '../../SharedComponents/TopNavigation/TopNavigation';
import styles from './Categories.module.css';


const categories = [
  {
    id: 1,
    name: 'Chicken & Meat',
    linkName: 'ChickenandMeat',
    images: fish,
  },
  {
    id: 2,
    name: 'Fruits & Vegetable',
    linkName: 'FruitsandVegetable',
    images: vegetable,
  },
  {
    id: 3,
    name: 'Milk & Dairy',
    linkName: 'MilkandDairy',
    images: milk,
  },
  {
    id: 4,
    name: 'Grocery',
    linkName: 'Grocery',
    images: honey,
  },
  {
    id: 5,
    name: 'Soup & Detergents',
    linkName: 'SoupandDetergents',
    images: cleaner,
  },
  {
    id: 6,
    name: 'Baby Care & Beauty',
    linkName: 'BabyCareandBeauty',
    images: baby,
  },
  {
    id: 7,
    name: 'Pharmacy',
    linkName: 'Pharmacy',
    images: dumbbell,
  },
];

const Categories = () => {
  const dispatch = useDispatch();
  //const match = useMatch('/products/:keyword');
  //const [category, setCategory] = useState("");
  
  const {
    error,
  } = useSelector((state) => state.products);
  // const keyword = match?.params?.keyword;
  
  // const changeCategory = (newcategory) => {
  //   setCategory(newcategory)
  // }

  // useEffect(() => {
  //   if (error) {
  //     toast.error(error);
  //     dispatch(clearErrors());
  //   }

  //   dispatch(getProduct(keyword, category));
  // }, [dispatch, keyword, category, error]);


  
  // for (const pd of state.productsState) {
  //   category = [...category, pd.category];
  // }

  // const uniqueCategory = [...new Set(category)];

  // const allPd = [0,0,0,0,0];

  // for (const pd of uniqueCategory) {
  //   if (pd === 'Fresh Vegetable') {
  //     allPd.push({ name: 'Fresh Vegetable', img: vegetable });
  //   }
  //   if (pd === 'Fish and Meat') {
  //     allPd.push({ name: 'Fish and Meat', img: fish });
  //   }
  //   if (pd === 'Organic Food') {
  //     allPd.push({ name: 'Organic Food', img: apple });
  //   }
  //   if (pd === 'Cooking Essentials') {
  //     allPd.push({ name: 'Cooking Essentials', img: cooking });
  //   }
  //   if (pd === 'Breakfast') {
  //     allPd.push({ name: 'Breakfast', img: breakfast });
  //   }
  //   if (pd === 'Drinks') {
  //     allPd.push({ name: 'Drinks', img: drink });
  //   }
  //   if (pd === 'Milk and Dairy') {
  //     allPd.push({ name: 'Milk and Dairy', img: milk });
  //   }
  //   if (pd === 'Honey') {
  //     allPd.push({ name: 'Honey', img: honey });
  //   }
  //   if (pd === 'Jam and Jelly') {
  //     allPd.push({ name: 'Jam and Jelly', img: jam });
  //   }
  //   if (pd === 'Beauty and Health') {
  //     allPd.push({ name: 'Beauty and Health', img: beauty });
  //   }
  //   if (pd === 'Sauces') {
  //     allPd.push({ name: 'Sauces', img: dumbbell });
  //   }
  //   if (pd === 'Pickles and Condiments') {
  //     allPd.push({ name: 'Pickles and Condiments', img: chili });
  //   }
  //   if (pd === 'Snacks and Instant') {
  //     allPd.push({ name: 'Snacks and Instant', img: chips });
  //   }
  //   if (pd === 'Biscuits and Cakes') {
  //     allPd.push({ name: 'Biscuits and Cakes', img: cookie });
  //   }
  //   if (pd === 'Household Tools') {
  //     allPd.push({ name: 'Household Tools', img: cleaner });
  //   }
  //   if (pd === 'Baby Care') {
  //     allPd.push({ name: 'Baby Care', img: baby });
  //   }
  //   if (pd === 'Pet Care') {
  //     allPd.push({ name: 'Pet Care', img: cat });
  //   }
  // }

  useEffect(() => {
    document.title = 'All Categories | Basket Bistro';
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <>
      {/* <TopNavigation /> */}
      <CartTracker />
      <section id={styles.categories}>
        <Container>
          <Row>
            {error && toast.error(error)}
            <Col lg={3}>
              <h3 className='mb-4'>Categories</h3>
              <aside id={styles.aside}>
                {categories.map((category, idx) => (
                  <NavLink key={idx} to={`/categories/${category.linkName}`} className={(navInfo) => (navInfo.isActive ? styles.active : '')}>
                    <span>
                      <img src={category.images} alt={category.name} />
                    </span>
                    {category.name}
                  </NavLink>
                ))}
              </aside>
            </Col>
            <Col lg={9}>
              <Outlet />
            </Col>
          </Row>
        </Container>
      </section>
      <DailyNeeds />
      {/* <Footer /> */}
    </>
  );
};

export default Categories;
