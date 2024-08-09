import { stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";
import { PageBlocksServices } from "../../../tina/__generated__/types";
import ServiceCard from "./serviceCard";
import { makeGroupsOf } from "../../../lib/utils";

const staggerMenuItems = stagger(0.25, { startDelay: 0 });

function useServiceCardAnimation() {
  const [scope, animate] = useAnimate();
  const inView = useInView(scope);

  useEffect(() => {
    animate(".c-service-card", inView ? { opacity: 1 } : { opacity: 0 }, {
      duration: 0.75,
      delay: inView ? staggerMenuItems : 0,
    });
  }, [inView, animate]);

  return scope;
}

const ServicesCardGroup = ({ items }: PageBlocksServices) => {
  const scope = useServiceCardAnimation();
  return (
    <div ref={scope}>
      {items &&
        makeGroupsOf(items, 2).map((itemRow, i) => (
          <div
            key={`service-row-group-${i}`}
            className="row row-cols-1 row-cols-md-2 g-md-4"
          >
            {itemRow.map((item, j) => (
              <div key={`service-row-${i}-${j}`} className="col mb-4">
                <ServiceCard {...item} />
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default ServicesCardGroup;
