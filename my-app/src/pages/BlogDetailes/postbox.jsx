import { useEffect, useState } from "react";
import { Config } from "../../Utils/config";
import { Comment } from "./commentbox";
import axios from "axios";
import {Notif} from "../../Utils/Notif";  
import { useParams } from "react-router-dom";

const PostBox = (props) => {
  const {id} = useParams();
  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [comment,setCommnet]=useState();
  const [item, setitem] = useState();
  useEffect(() => {
    axios.get(`http://localhost:313/blog/${props.id}`).then((response) => {
      setitem(response.data);
    });
  },[item]);
const submit = async (e) => {
  var date = new Date();
  var year=date.getFullYear()
  var month=date.getMonth()
  var day=date.getDate()
  var d = year+"/"+month+"/"+day;
  let status =201;
  e.preventDefault();
  await axios.post("http://localhost:313/comments",{name:name,email:email,comment:comment,blog_id:id,date:d}).then((e)=>{
    status=e.status;
    if(e.status==201)
    {
      Notif('success',"نظر شما با موفقیت ارسال شد")
    }
    else {
      Notif('error',"در اینجا یک خطا وجود دارد !")
    }
  })
};

  return (
    <>
      <div className="postbox__wrapper">
        <article className="postbox__item format-image mb-50 transition-3">
          <div className="postbox__thumb w-img">
            <img src={Config.blog + "sidebar/" + item?.pic} alt="" />
          </div>
          <div className="postbox__content">
            <h3 className="postbox__title postbox__title-2">
              <a href="blog-details.html">{item?.title}</a>
            </h3>
            <div className="postbox__meta">
              <p>
                تاریخ: <span>{item?.date} </span>
              </p>
            </div>
            <div className="postbox__text">
              <p>
                {
                  item?.text
                }
              </p>
            </div>
            <div className="postbox__text">
              <p>
                {
                  item?.text
                }
              </p>
            </div>
            <div className="postbox__text">
              <p>
                {
                  item?.text
                }
              </p>
            </div>
            <div className="postbox__text">
              <p>
                {
                  item?.text
                }
              </p>
            </div>
          </div>
        </article>
        <div className="row">
          <div className="col-xxl-8">
            <div className="postbox__comments">
              <div className="postbox__comment-title mb-30">
                <h3>نظرات (
                  {(props?.item) && props?.item.length}
                  )</h3>
              </div>
              <div className="latest-comments mb-30">
                <ul>
                  {
                    (props?.item) && props?.item.map((item) => {
                      return (
                        <>
                          <li classNameName={item.child ? "children" : ""}>
                            <Comment item={item}></Comment>
                          </li>
                        </>
                      );
                    })
                  }
                </ul>
              </div>
            </div>
            <div className="post-comments-form mb-100">
              <div className="post-comments-title mb-30">
                <h3>ارسال نظر</h3>
              </div>
              <form id="contacts-form" class="conatct-post-form" name="contact-form" onSubmit={(event)=>submit(event)}>
                <div class="row">
                  <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="contact-icon p-relative contacts-name">
                      <input id="name" name="name" type="text" placeholder="نام" onChange={(e) => setName(e.target.value)} required/>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="contact-icon p-relative contacts-name">
                      <input id="email" name="email" type="email" placeholder="ایمیل" onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                  </div>
                  <div class="col-xl-12">
                    <div class="contact-icon p-relative contacts-message">
                      <textarea
                        name="comment"
                        id="comment"
                        cols="30"
                        rows="10"
                        placeholder="نظر"
                        onChange={(e) => setCommnet(e.target.value)}
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-xl-12">
                    <button class="t-y-btn t-y-btn-grey" type="submit">
                      ارسال نظر
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { PostBox };
