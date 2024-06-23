import { Link } from "react-router-dom";

const Sidebar = ()=> {
    function toggling()
    {
        window?.$(".cat__menu").slideToggle("slow")
    }
    return (
        <>
            <div className="cat__menu-wrapper">
                                <div className="cat-toggle">
                                    <button type="button" className="cat-toggle-btn" onClick={toggling}><i className="fa fa-bars"></i> خرید براساس دپارتمان</button>
                                    <div className="cat__menu">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li>
                                                    <Link to="product">همه محصولات<i className="fa fa-angle-up"></i></Link>
                                                    <ul className="mega-menu">
                                                        <li><Link to="product">صفحات فروشگاهی</Link>
                                                            <ul className="mega-item">
                                                                <li><Link to="product">استاندارد</Link></li>
                                                                <li><Link to="product">سایدبار سمت راست</Link></li>
                                                                <li><Link to="product">سایدبار سمت چپ</Link></li>
                                                                <li><Link to="product">سه ستون</Link></li>
                                                                <li><Link to="product">چهار ستون</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li><Link to="product">صفحه محصولات</Link>
                                                            <ul className="mega-item">
                                                                <li><Link to="product">تک محصول</Link></li>
                                                                <li><Link to="product">محصول V2</Link></li>
                                                                <li><Link to="product">محصول V3</Link></li>
                                                                <li><Link to="product">محصولات متغییر</Link></li>
                                                                <li><Link to="product">محصولات متغییر</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li><Link to="product">دیگر صفحات</Link>
                                                            <ul className="mega-item">
                                                                <li><Link to="product">علاقه مندی ها</Link></li>
                                                                <li><Link to="product">سبد خرید</Link></li>
                                                                <li><Link to="product">Checkout</Link></li>
                                                                <li><Link to="product">ورود</Link></li>
                                                                <li><Link to="product">ثبت نام</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li><Link to="product">گوشی و تبلت</Link>
                                                            <ul className="mega-item">
                                                                <li><Link to="product">دسته بندی 1</Link></li>
                                                                <li><Link to="product">دسته بندی 2</Link></li>
                                                                <li><Link to="product">دسته بندی 3</Link></li>
                                                                <li><Link to="product">دسته بندی 4</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li><Link to="product">گوشی و تبلت</Link>
                                                            <ul className="mega-item">
                                                                <li><Link to="product">دسته بندی 1</Link></li>
                                                                <li><Link to="product">دسته بندی 2</Link></li>
                                                                <li><Link to="product">دسته بندی 3</Link></li>
                                                                <li><Link to="product">دسته بندی 4</Link></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link to="product">بیشترین فروش
                                                        <span className="cat-label">داغ</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="product">ده محصول برتر
                                                        <span className="cat-label green">جدید</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="product">ورودی های جدید <i className="fa fa-angle-up"></i></Link>
                                                    <ul className="submenu">
                                                        <li><Link to="product">لوازم خانگی</Link></li>
                                                        <li><Link to="product">تکنولوژی</Link>
                                                            <ul className="submenu">
                                                                <li><Link to="product">دستگاه های ذخیره سازی</Link></li>
                                                                <li><Link to="product">مانیتور ها</Link></li>
                                                                <li><Link to="product">لپتاپ ها</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li><Link to="product">تجهیزات اداری</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link to="product">گوشی و تبلت</Link></li>
                                                <li><Link to="product">الکترونیک و دیجیتال</Link></li>
                                                <li className="d-laptop-none"><Link to="product">مد و لباس</Link></li>
                                                <li className="d-laptop-none"><Link to="product">ساعت و جواهرات</Link></li>
                                                <li><Link to="product">زیبایی و سلامتی</Link></li>
                                                <li><Link to="product">تلوزیون</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
        </>
    )
}

export {Sidebar};