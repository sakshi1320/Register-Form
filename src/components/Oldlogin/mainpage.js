import { Leftcomponent } from "./leftcomponent";
import { Rightcomponent } from "./rightcomponent";
import "./login.css";
export function Maincomponent() {
  return (
    <>
      <div className="mainBackground">
        <div>
          <div className="pageAlign">
            <div>
              <Leftcomponent />
            </div>
            <div>
              <Rightcomponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
