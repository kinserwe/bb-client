import errorNotFound from "../assets/images/error_not_found.png";

export const PageNotFound = () => {
  return (
    <section className="container flex flex-col font-semibold items-center justify-center text-3xl gap-y-5 h-[600px]">
      <img src={errorNotFound} alt="Ошибка 404" />
      <span>Страница не найдена</span>
    </section>
  );
};
