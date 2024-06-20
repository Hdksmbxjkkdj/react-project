import { useEffect, useState } from "react";
import { Config } from "../../Utils/config";
import { Comment } from "./commentbox";
import axios from "axios";
import {Notif} from "../../Utils/Notif";
import {useForm} from "react-hook-form";
import { Form, useParams } from "react-router-dom";

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
  }, []);
const submit = async (e) => {
  var date = new Date();
  var year=date.getFullYear()
  var month=date.getMonth()
  var day=date.getDate()
  var d = year+"/"+month+"/"+day;
  console.log(d);
  let status =201;
  e.preventDefault();
  // if(name==""||email)
  await axios.post("http://localhost:313/comments",{name:name,email:email,comment:comment,blog_id:id,date:d}).then((e)=>{
    status=e.status;
    if(e.status==201)
    {
      Notif('success',"your commnet posted successfully :)")
    }
    else {
      Notif('error',"there was an error !")
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
              <a href="blog-details.html">Curabitur Lobortis News</a>
            </h3>
            <div className="postbox__meta">
              <p>
                Post Date: <span>July 21, 2021 </span>
              </p>
            </div>
            <div className="postbox__text">
              <p>
                Suspendisse turpis ipsum, tempus in nulla eu, posuere pharetra
                nibh. In dignissim vitae lorem non mollis. Praesent pretium
                tellus in tortor viverra condimentum. Nullam dignissim facilisis
                nisl, accumsan placerat justo ultricies vel. Aenean sit amet
                quam vel turpis interdum sagittis et eget neque.
              </p>
            </div>
            <div className="postbox__text">
              <p>
                Suspendisse turpis ipsum, tempus in nulla eu, posuere pharetra
                nibh. In dignissim vitae lorem non mollis. Praesent pretium
                tellus in tortor viverra condimentum. Nullam dignissim facilisis
                nisl, accumsan placerat justo ultricies vel. Aenean sit amet
                quam vel turpis interdum sagittis et eget neque.
              </p>
            </div>
            <div className="postbox__text">
              <p>
                Koma and Torus are two tea infusers, each with an original
                design and a concealed function. Koma has a round base and a
                long stainless steel-trimmed handle which offers a comfortable
                grip and allows. And the brushed steel cover opens and closes at
                the touch of a finger to easily fill and empty the infuser. The
                perfect way to enjoy brewing tea. Torus is donut-shaped and can
                cling to any cup. It is accompanied by a case that can contain
                up to three different diffusers and can be used for dry storage
                of loose tea.
              </p>
            </div>
            <div className="postbox__text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </article>
        <div className="row">
          <div className="col-xxl-8">
            <div className="postbox__comments">
              <div className="postbox__comment-title mb-30">
                <h3>Comments (32)</h3>
              </div>
              <div className="latest-comments mb-30">
                <ul>
                  {props.item.map((item) => {
                    return (
                      <>
                        <li classNameName={item.child ? "children" : ""}>
                          <Comment item={item}></Comment>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="post-comments-form mb-100">
              <div className="post-comments-title mb-30">
                <h3>Leave A Reply</h3>
              </div>
              <form id="contacts-form" class="conatct-post-form" name="contact-form" action="#" onSubmit={(event)=>submit(event)}>
                <div class="row">
                  <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="contact-icon p-relative contacts-name">
                      <input id="name" name="name" type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} required/>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="contact-icon p-relative contacts-name">
                      <input id="email" name="email" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                  </div>
                  <div class="col-xl-12">
                    <div class="contact-icon p-relative contacts-message">
                      <textarea
                        name="comment"
                        id="comment"
                        cols="30"
                        rows="10"
                        placeholder="Comments"
                        onChange={(e) => setCommnet(e.target.value)}
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-xl-12">
                    <button class="t-y-btn t-y-btn-grey" type="submit">
                      Post comment
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
