function detectDevice({
  let type = new MobileDetect(window.navigator.userAgent)

  let spline = document.getElementByClassName("section1");
  if (type.os()==="IOS"){
    section1.innerHTML = <Spline scene="https://prod.spline.design/HXych7uKwfhCDwfA/scene.splinecode" />;
  }
})