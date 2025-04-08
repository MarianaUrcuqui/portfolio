import { useNavigate } from "react-router-dom";

export function ChangeURL(page, element)
{
  window.history.replaceState(null, null, page);
}

export function Navigate(page){
  const navigate = useNavigate();

  navigate(page, { replace: false });

}