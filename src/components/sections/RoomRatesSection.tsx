"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import { RoomCard } from "@/components/ui/RoomCard";
import { rooms, roomFilterTabs, type RoomFilterTab } from "@/data/rooms";

export function RoomRatesSection() {
  const [activeTab, setActiveTab] = useState<RoomFilterTab>("All");
  const shouldReduceMotion = useReducedMotion();

  const filteredRooms = useMemo(() => {
    if (activeTab === "All") {
      return rooms;
    }

    return rooms.filter((room) => room.category === activeTab);
  }, [activeTab]);

  return (
    <section className="py-14 md:py-20">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap gap-2">
          {roomFilterTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              className={`min-h-[44px] rounded-full px-5 py-2 text-sm font-medium transition ${
                tab === activeTab
                  ? "bg-accent text-white"
                  : "border border-line bg-white text-accent-dark hover:bg-[#f1f6f6]"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredRooms.map((room, index) => (
            <motion.div
              key={room.id}
              layout={!shouldReduceMotion}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.04 }}
            >
              <RoomCard room={room} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

