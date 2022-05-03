import React from "react";
import { Route } from "react-router-dom";
import Test from './Components/Test'
import Login from './Components/Authentication/Login'
import SignUp from './Components/Authentication/SignUp'
import ChangePassword from './Components/Authentication/ChangePassword'
import EmailVerify from './Components/Authentication/EmailVerify'
import ForgotPassword from './Components/Authentication/ForgotPassword'
import SetNewPassword from './Components/Authentication/SetNewPassword'
import UpdateUser from './Components/Authentication/UpdateUser'
import Profile from './Components/Profiles/DetailProfile'
import UpdateProfile from './Components/Profiles/UpdateProfile'
import BillingAddress from './Components/Address/DetailBillingAddress'
import UpdateBillingAddress from './Components/Address/UpdateBillingAddress'
import ShippingAddress from './Components/Address/DetailShippingAddress'
import UpdateShippingAddress from './Components/Address/UpdateShippingAddress'
import Notifications from './Components/Notification/Notifications'
import ShopList from './Components/Shop/ShopList'
import ShopDetail from './Components/Shop/ShopDetail'
import ProductsList from './Components/Products/ProductList'
import ProductDetail from './Components/Products/ProductDetail'
import CategoriesList from './Components/Categories/CategoriesList'
import CategoriesDetail from './Components/Categories/CategoriesDetail'
import Search from './Components/Search/Search'
import CustomerService from './Components/Issues/CustomerService'
import ReportBug from './Components/Issues/ReportBug'
import ReportShop from './Components/Issues/ReportShop'
import Home from './Components/Home/Home'
import FiftyToHundred from './Components/Home/FiftyToHundredDollars'
import UnderTen from './Components/Home/UnderTenDollars'
import TenToFifty from './Components/Home/TenToFiftyDollars'
import OverThousand from './Components/Home/OverThousandDollars'
import MostJoinedShops from './Components/Home/MostJoinedShop'
import MostLikedProducts from './Components/Home/MostLikedProduct'
import MostViewedProducts from './Components/Home/MostViewedProduct'
import MostViewedShops from './Components/Home/MostViewedShop'
import MostViewedCategories from './Components/Home/MostViewedCategory'
import DiscountProducts from './Components/Home/DiscountProducts'
import ShopCreate from './Components/Shop/ShopCreate'
import ShopsJoined from './Components/Shop/Dashboard/ShopsJoined'
import ShopsOwned from './Components/Shop/Dashboard/ShopsOwned'
import AdminDashboard from './Components/Admin/Dashboard'


const BaseRouter = () => (
  <div>
    {/* authentication */}
    <Route exact path="/df" component={Test} />
    <Route exact path="/login/" component={Login} />
    <Route exact path="/register/" component={SignUp} />
    <Route exact path="/change-password/" component={ChangePassword} />
    <Route exact path="/email-verify/:token/" component={EmailVerify} />
    <Route exact path="/forgot-password" component={ForgotPassword} />
    <Route exact path="/set-new-password/:uidb64/:token/" component={SetNewPassword} />
    <Route exact path="/update-user/" component={UpdateUser} />

    {/* profile */}
    <Route exact path="/profile/" component={Profile} />
    <Route exact path="/update-profile/:slug/:id/" component={UpdateProfile} />

    {/* notifications */}
    <Route exact path="/notifications/" component={Notifications} />

    {/* search */}
    <Route exact path="/search-q/:query/" component={Search} />

    {/* shop */}
    <Route exact path="/shops/" component={ShopList} />
    <Route exact path="/shop-create/" component={ShopCreate} />
    <Route exact path="/shop-detail/:slug/:id/" component={ShopDetail} />
    <Route exact path="/shop-joined/" component={ShopsJoined} />
    <Route exact path="/shop-owned/" component={ShopsOwned} />

    {/* products */}
    <Route exact path="/products/" component={ProductsList} />
    <Route exact path="/product-detail/:slug/:id/" component={ProductDetail} />

    {/* categories */}
    <Route exact path="/categories/" component={CategoriesList} />
    <Route exact path="/categories-detail/:slug/:id/" component={CategoriesDetail} />

    {/* issues */}
    <Route exact path="/create-customerService/" component={CustomerService} />
    <Route exact path="/create-reportBug/" component={ReportBug} />
    <Route exact path="/create-reportShop/" component={ReportShop} />

    {/* address */}
    <Route exact path="/billing-address/" component={BillingAddress} />
    <Route exact path="/update-billing-address/:slug/:id/" component={UpdateBillingAddress} />
    <Route exact path="/shipping-address/" component={ShippingAddress} />
    <Route exact path="/update-shipping-address/:slug/:id/" component={UpdateShippingAddress} />

    {/* home */}
    
    <Route exact path="/" component={Home} />
    <Route exact path="/fifty-hundred/" component={FiftyToHundred} />
    <Route exact path="/under-ten/" component={UnderTen} />
    <Route exact path="/ten-fifty" component={TenToFifty} />
    <Route exact path="/over-thousand/" component={OverThousand} />
    <Route exact path="/most-joined-shops/" component={MostJoinedShops} />
    <Route exact path="/most-liked-products/" component={MostLikedProducts} />
    <Route exact path="/most-viewed-categories/" component={MostViewedCategories} />
    <Route exact path="/most-viewed-products/" component={MostViewedProducts} />
    <Route exact path="/most-viewed-shops/" component={MostViewedShops} />
    <Route exact path="/discounts/" component={DiscountProducts} />


    <Route exact path="/admin/" component={AdminDashboard} />

    </div>
);

export default BaseRouter;

