import { Config } from "../../Utils/config";
import { Comment } from "./commentbox";

const PostBox = (props) => {
  const input = [
    { type: "text", placeholder: "Name" },
    { type: "text", placeholder: "Email" },
    { type: "text", placeholder: "Subject" },
  ];
  return (
    <>
      <div class="postbox__wrapper">
        <article class="postbox__item format-image mb-50 transition-3">
          <div class="postbox__thumb w-img">
            <a href="blog-details.html">
              <img src={Config.blog + "blog-1.jpg"} alt="" />
            </a>
          </div>
          <div class="postbox__content">
            <h3 class="postbox__title postbox__title-2">
              <a href="blog-details.html">Curabitur Lobortis News</a>
            </h3>
            <div class="postbox__meta">
              <p>
                Post Date: <span>July 21, 2021 </span>
              </p>
            </div>
            <div class="postbox__text">
              <p>
                Suspendisse turpis ipsum, tempus in nulla eu, posuere pharetra
                nibh. In dignissim vitae lorem non mollis. Praesent pretium
                tellus in tortor viverra condimentum. Nullam dignissim facilisis
                nisl, accumsan placerat justo ultricies vel. Aenean sit amet
                quam vel turpis interdum sagittis et eget neque.
              </p>
            </div>
            <div class="postbox__text">
              <p>
                Suspendisse turpis ipsum, tempus in nulla eu, posuere pharetra
                nibh. In dignissim vitae lorem non mollis. Praesent pretium
                tellus in tortor viverra condimentum. Nullam dignissim facilisis
                nisl, accumsan placerat justo ultricies vel. Aenean sit amet
                quam vel turpis interdum sagittis et eget neque.
              </p>
            </div>
            <div class="postbox__text">
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
            <div class="postbox__text">
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
        <div class="row">
          <div class="col-xxl-8">
            <div class="postbox__comments">
              <div class="postbox__comment-title mb-30">
                <h3>Comments (32)</h3>
              </div>
              <div class="latest-comments mb-30">
                <ul>
                  {props.item.map((item) => {
                    return (
                      <>
                        <li className={item.child ? "children" : ""}>
                          <Comment item={item}></Comment>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div class="post-comments-form mb-100">
              <div class="post-comments-title mb-30">
                <h3>Leave A Reply</h3>
              </div>
              <form id="contacts-form" class="conatct-post-form" action="#">
                <div class="row">
                  {input.map((x) => {
                    return (
                      <>
                        <div class={(x.placeholder!="Subject")?"col-xl-6 col-lg-6 col-md-6":"col-xl-12"}>
                          <div class="contact-icon p-relative contacts-name">
                            <input type={x.type} placeholder={x.placeholder} />
                          </div>
                        </div>
                      </>
                    );
                  })}
                  <div class="col-xl-12">
                    <div class="contact-icon p-relative contacts-message">
                      <textarea
                        name="comments"
                        id="comments"
                        cols="30"
                        rows="10"
                        placeholder="Comments"
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
