import { CardContent, CardGroup } from "../Card/Card.styled";
import Loader from "../Loader/Loader";
import { LCardBtn, LCardTheme, SCardLoader } from "./CardLoader.styled";

const CardLoader = () => {
  return (
    <SCardLoader>
      <CardGroup>
        <LCardTheme>
          <Loader width={82} height={20} borderRadius={10} />
        </LCardTheme>
        <LCardBtn>
          <Loader width={18} height={4} borderRadius={0} />
        </LCardBtn>
      </CardGroup>
      <CardContent>
        <Loader width={113} height={13} borderRadius={0} />
        <Loader width={56} height={13} borderRadius={0} />
      </CardContent>
    </SCardLoader>
  );
};

export default CardLoader;
