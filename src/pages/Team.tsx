import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { PageTransition } from "@/components/layout/PageTransition";
import { teamMembers } from "@/data/team";

const Team = () => {
  return (
    <Layout>
      <PageTransition>
        {/* Header */}
        <section className="bg-secondary py-12 md:py-16">
          <div className="container-editorial">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="font-display text-4xl md:text-5xl font-bold text-headline mb-4">
                Our Team
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Meet the dedicated individuals behind Voice of AAL
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Members */}
        <section className="container-editorial py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.article
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group text-center"
              >
                {/* Avatar */}
                <div className="relative w-40 h-40 mx-auto mb-6 overflow-hidden rounded-full">
                  <motion.img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 border-4 border-primary/20 rounded-full group-hover:border-primary/50 transition-colors" />
                </div>

                {/* Info */}
                <h3 className="font-display text-xl font-bold text-headline mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                  {member.role}
                </p>
                <p className="text-body text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Join Us Section */}
        <section className="container-editorial pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center bg-secondary p-8 md:p-12 rounded-sm"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-headline mb-4">
              Want to Join Our Team?
            </h2>
            <p className="text-muted-foreground mb-6">
              We're always looking for passionate writers, photographers, and creatives 
              who want to share stories from our school community.
            </p>
            <a
              href="/contact"
              className="btn-editorial inline-block"
            >
              Get in Touch
            </a>
          </motion.div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default Team;
