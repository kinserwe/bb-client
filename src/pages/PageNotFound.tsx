import errorNotFound from "../assets/images/error_not_found.png";

const PageNotFound = () => {
  return (
    <section className="container flex h-[600px] flex-col items-center justify-center gap-y-5 text-3xl font-semibold">
      <img src={errorNotFound} alt="Ошибка 404" />
      <span>Страница не найдена</span>
    </section>
  );
};

export default PageNotFound;
